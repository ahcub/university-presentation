let currentFilter = 'all';
let searchTerm = '';

function initializeApp() {
    updateStats();
    renderTimeline();
    setupEventListeners();
    if (typeof initializeCharts === 'function') {
        initializeCharts();
    }
}

function updateStats() {
    const totalEvents = cryptoTimeline.reduce((sum, year) => sum + year.events.length, 0);
    const ecosystems = new Set();
    
    cryptoTimeline.forEach(year => {
        year.events.forEach(event => {
            if (event.ecosystem) {
                ecosystems.add(event.ecosystem);
            }
        });
    });
    
    const yearSpan = cryptoTimeline.length > 0 ? 
        cryptoTimeline[cryptoTimeline.length - 1].year - cryptoTimeline[0].year + 1 : 0;
    
    document.getElementById('totalEvents').textContent = totalEvents;
    document.getElementById('ecosystemCount').textContent = ecosystems.size;
    document.getElementById('yearSpan').textContent = yearSpan;
}

function renderTimeline() {
    const timelineContainer = document.getElementById('timeline');
    timelineContainer.innerHTML = '';

    const filteredTimeline = filterTimeline();

    const totalFilteredEvents = filteredTimeline.reduce((sum, year) => sum + year.events.length, 0);
    updateEventCounter(totalFilteredEvents);

    if (filteredTimeline.length === 0) {
        timelineContainer.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--text-secondary);">Не знайдено подій, що відповідають вашим критеріям.</div>';
        return;
    }

    filteredTimeline.forEach(yearData => {
        const yearSection = document.createElement('div');
        yearSection.className = 'year-section';

        const yearHeader = document.createElement('div');
        yearHeader.className = 'year-header';
        yearHeader.textContent = yearData.year;

        const eventsGrid = document.createElement('div');
        eventsGrid.className = 'events-grid';

        yearData.events.forEach(event => {
            const eventCard = createEventCard(event);
            eventsGrid.appendChild(eventCard);
        });

        yearSection.appendChild(yearHeader);
        yearSection.appendChild(eventsGrid);
        timelineContainer.appendChild(yearSection);
    });
}

function updateEventCounter(count) {
    const counterElement = document.getElementById('eventCount');
    const resultsCounter = document.getElementById('resultsCounter');

    if (counterElement) {
        counterElement.textContent = count;
        resultsCounter.classList.add('updating');
        setTimeout(() => resultsCounter.classList.remove('updating'), 500);
    }
}

function scrollToTimeline() {
    const timelineSection = document.getElementById('timelineSection');
    if (timelineSection) {
        timelineSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        timelineSection.classList.add('highlight');
        setTimeout(() => timelineSection.classList.remove('highlight'), 1000);
    }
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = `event-card ${event.category}`;
    
    const date = document.createElement('div');
    date.className = 'event-date';
    date.textContent = event.date;
    
    const title = document.createElement('div');
    title.className = 'event-title';
    title.textContent = event.title;
    
    const description = document.createElement('div');
    description.className = 'event-description';
    description.textContent = event.description;
    
    const tags = document.createElement('div');
    tags.className = 'event-tags';
    event.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'event-tag';
        tagElement.textContent = tag;
        tags.appendChild(tagElement);
    });
    
    card.appendChild(date);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(tags);
    
    card.addEventListener('click', () => showEventModal(event));
    
    return card;
}

function filterTimeline() {
    return cryptoTimeline.map(yearData => {
        const filteredEvents = yearData.events.filter(event => {
            const matchesFilter = currentFilter === 'all' || event.category === currentFilter;
            
            const matchesSearch = searchTerm === '' || 
                event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (event.ecosystem && event.ecosystem.toLowerCase().includes(searchTerm.toLowerCase()));
            
            return matchesFilter && matchesSearch;
        });
        
        return {
            year: yearData.year,
            events: filteredEvents
        };
    }).filter(yearData => yearData.events.length > 0);
}

function setupEventListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    let isFirstFilter = true;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            renderTimeline();

            if (!isFirstFilter) {
                setTimeout(() => scrollToTimeline(), 100);
            }
            isFirstFilter = false;
        });
    });

    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderTimeline();
            if (searchTerm.length > 0) {
                setTimeout(() => scrollToTimeline(), 100);
            }
        }, 300);
    });

    const modal = document.getElementById('eventModal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function showEventModal(event) {
    const modal = document.getElementById('eventModal');
    const modalBody = document.getElementById('modalBody');

    const categoryColors = {
        bitcoin: 'var(--bitcoin-color)',
        ethereum: 'var(--ethereum-color)',
        defi: 'var(--defi-color)',
        nft: 'var(--nft-color)',
        layer2: 'var(--layer2-color)',
        regulation: 'var(--regulation-color)',
        innovation: 'var(--innovation-color)'
    };

    const color = categoryColors[event.category] || 'var(--ethereum-color)';

    modalBody.innerHTML = `
        <div style="border-left: 5px solid ${color}; padding-left: 20px; margin-bottom: 20px;">
            <h2 style="margin-bottom: 10px; color: var(--text-primary);">${event.title}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 5px;">${event.date}</p>
            <p style="color: ${color}; font-weight: 600; text-transform: uppercase; font-size: 0.9rem;">
                ${event.category.replace(/([A-Z])/g, ' $1').trim()}
            </p>
        </div>

        <div style="margin-bottom: 25px;">
            <h3 style="color: var(--text-primary); margin-bottom: 10px;">Опис</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; font-size: 1.05rem;">
                ${event.description}
            </p>
        </div>

        ${event.impact ? `
            <div style="background: rgba(98, 126, 234, 0.1); padding: 15px; border-radius: 10px; margin-bottom: 20px; border: 1px solid rgba(98, 126, 234, 0.2);">
                <h3 style="color: var(--ethereum-color); margin-bottom: 8px; font-size: 0.95rem;">
                    💡 Вплив
                </h3>
                <p style="color: var(--text-primary); line-height: 1.6;">
                    ${event.impact}
                </p>
            </div>
        ` : ''}

        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--text-primary); margin-bottom: 10px; font-size: 0.95rem;">Екосистема</h3>
            <span style="display: inline-block; padding: 8px 16px; background: ${color}; color: white; border-radius: 20px; font-weight: 600;">
                ${event.ecosystem || 'Мультиланцюг'}
            </span>
        </div>

        <div>
            <h3 style="color: var(--text-primary); margin-bottom: 10px; font-size: 0.95rem;">Теги</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${event.tags.map(tag => `
                    <span style="padding: 6px 14px; background: var(--bg-dark); border: 1px solid var(--border-color); border-radius: 15px; font-size: 0.85rem; color: var(--text-secondary);">
                        ${tag}
                    </span>
                `).join('')}
            </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--border-color);">
            <p style="color: var(--text-secondary); font-size: 0.85rem; font-style: italic;">
                Click outside or press the × button to close
            </p>
        </div>
    `;

    modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', initializeApp);

