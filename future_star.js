// ==================== ABJAD TABLE (Numerical Values) ====================
const abjad = {
    'ا': 1, 'ب': 2, 'پ': 2, 'ت': 400, 'ث': 500, 'ج': 3, 'چ': 3, 'ح': 8, 'خ': 600, 'د': 4,
    'ذ': 700, 'ر': 200, 'ز': 7, 'س': 60, 'ش': 300, 'ص': 90, 'ض': 800, 'ط': 9, 'ظ': 900,
    'ع': 70, 'غ': 1000, 'ف': 80, 'ق': 100, 'ک': 20, 'گ': 20, 'ل': 30, 'م': 40, 'ن': 50,
    'و': 6, 'ہ': 5, 'ھ': 5, 'ی': 10, 'ے': 10,
    // English letters approximation (A=1, B=2, etc.)
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
    'k': 20, 'l': 30, 'm': 40, 'n': 50, 'o': 60, 'p': 70, 'q': 80, 'r': 90, 's': 100,
    't': 200, 'u': 300, 'v': 400, 'w': 500, 'x': 600, 'y': 700, 'z': 800
};

// ==================== DAY LORDS ====================
const dayLords = {
    'Sunday': { name: 'Sun', element: 'Fire', quality: 'energetic' },
    'Monday': { name: 'Moon', element: 'Water', quality: 'emotional' },
    'Tuesday': { name: 'Mars', element: 'Fire', quality: 'aggressive' },
    'Wednesday': { name: 'Mercury', element: 'Air', quality: 'intellectual' },
    'Thursday': { name: 'Jupiter', element: 'Air', quality: 'expansive' },
    'Friday': { name: 'Venus', element: 'Earth', quality: 'romantic' },
    'Saturday': { name: 'Saturn', element: 'Earth', quality: 'disciplined' }
};

// ==================== COMPLETE STAR MAPPING ====================
const starMapping = {
    1: {
        name: 'Aries',
        symbol: '♈',
        element: 'Fire',
        ruling: 'Mars',
        personality: 'Courageous, determined, confident',
        traits: 'You are brave and competitive. You make quick decisions and love challenges.',
        friends: [5, 9],
        enemies: [7, 12],
        neutral: [2, 3, 4, 6, 8, 10, 11],
        best_careers: ['Police Officer', 'Military', 'Entrepreneur', 'Surgeon', 'Athlete'],
        avoid_careers: ['Desk Job', 'Accounting', 'Research'],
        talents: ['Leadership', 'Courage', 'Competition', 'Quick decisions'],
        lucky_days: ['Tuesday'],
        lucky_colors: ['Red', 'Orange'],
        emoji: '🔥'
    },
    2: {
        name: 'Taurus',
        symbol: '♉',
        element: 'Earth',
        ruling: 'Venus',
        personality: 'Reliable, patient, practical',
        traits: 'You are patient and stable. You love comfort and luxury.',
        friends: [6, 10],
        enemies: [8, 11],
        neutral: [1, 3, 4, 5, 7, 9, 12],
        best_careers: ['Banker', 'Chef', 'Designer', 'Architect', 'Financial Advisor'],
        avoid_careers: ['Risky Business', 'Sales', 'Journalism'],
        talents: ['Patience', 'Perseverance', 'Practical thinking', 'Money management'],
        lucky_days: ['Friday'],
        lucky_colors: ['Green', 'Pink'],
        emoji: '🌱'
    },
    3: {
        name: 'Gemini',
        symbol: '♊',
        element: 'Air',
        ruling: 'Mercury',
        personality: 'Adaptable, outgoing, intelligent',
        traits: 'You learn quickly and love new things. You cannot stay in one place.',
        friends: [7, 11],
        enemies: [5, 9],
        neutral: [1, 2, 4, 6, 8, 10, 12],
        best_careers: ['Journalist', 'Teacher', 'Writer', 'Marketer', 'Tour Guide'],
        avoid_careers: ['Repetitive Work', 'Data Entry', 'Factory Work'],
        talents: ['Communication', 'Writing', 'Teaching', 'New ideas'],
        lucky_days: ['Wednesday'],
        lucky_colors: ['Yellow', 'Light Green'],
        emoji: '💨'
    },
    4: {
        name: 'Cancer',
        symbol: '♋',
        element: 'Water',
        ruling: 'Moon',
        personality: 'Emotional, nurturing, protective',
        traits: 'You are very emotional and love your family. You care for others.',
        friends: [8, 12],
        enemies: [2, 10],
        neutral: [1, 3, 5, 6, 7, 9, 11],
        best_careers: ['Nurse', 'Social Worker', 'Chef', 'Shop Owner', 'Historian'],
        avoid_careers: ['High Pressure Jobs', 'Construction', 'Military'],
        talents: ['Caring', 'Cooking', 'History', 'Children'],
        lucky_days: ['Monday'],
        lucky_colors: ['Silver', 'White'],
        emoji: '🌊'
    },
    5: {
        name: 'Leo',
        symbol: '♌',
        element: 'Fire',
        ruling: 'Sun',
        personality: 'Creative, passionate, generous',
        traits: 'You are confident and love attention. You want fame and respect.',
        friends: [1, 9],
        enemies: [3, 11],
        neutral: [2, 4, 6, 7, 8, 10, 12],
        best_careers: ['CEO', 'Actor', 'Fashion Designer', 'Politician', 'Director'],
        avoid_careers: ['Hidden Work', 'Assistant Roles', 'Isolated Jobs'],
        talents: ['Leadership', 'Performance', 'Creativity', 'Inspiring others'],
        lucky_days: ['Sunday'],
        lucky_colors: ['Gold', 'Orange'],
        emoji: '☀️'
    },
    6: {
        name: 'Virgo',
        symbol: '♍',
        element: 'Earth',
        ruling: 'Mercury',
        personality: 'Analytical, practical, meticulous',
        traits: 'You pay attention to details. You love cleanliness and perfection.',
        friends: [2, 10],
        enemies: [4, 12],
        neutral: [1, 3, 5, 7, 8, 9, 11],
        best_careers: ['Accountant', 'Nurse', 'Programmer', 'Writer', 'Researcher'],
        avoid_careers: ['Big Picture Planning', 'Management', 'Public Speaking'],
        talents: ['Attention to detail', 'Analysis', 'Health knowledge', 'Writing'],
        lucky_days: ['Wednesday'],
        lucky_colors: ['Green', 'Brown'],
        emoji: '🌾'
    },
    7: {
        name: 'Libra',
        symbol: '♎',
        element: 'Air',
        ruling: 'Venus',
        personality: 'Diplomatic, charming, fair',
        traits: 'You want justice in everything. You love beauty and balance.',
        friends: [3, 11],
        enemies: [1, 5],
        neutral: [2, 4, 6, 8, 9, 10, 12],
        best_careers: ['Lawyer', 'Judge', 'Diplomat', 'Graphic Designer', 'Customer Service'],
        avoid_careers: ['Heavy Labor', 'Isolated Jobs', 'Conflict-heavy Roles'],
        talents: ['Justice', 'Diplomacy', 'Art', 'People skills'],
        lucky_days: ['Friday'],
        lucky_colors: ['Blue', 'Pink'],
        emoji: '⚖️'
    },
    8: {
        name: 'Scorpio',
        symbol: '♏',
        element: 'Water',
        ruling: 'Mars',
        personality: 'Passionate, resourceful, determined',
        traits: 'You are deep and mysterious. You keep secrets well.',
        friends: [4, 12],
        enemies: [2, 6],
        neutral: [1, 3, 5, 7, 9, 10, 11],
        best_careers: ['Detective', 'Psychologist', 'Surgeon', 'Researcher', 'Financial Advisor'],
        avoid_careers: ['Sales', 'Customer Service', 'Team Work'],
        talents: ['Investigation', 'Secrets', 'Psychology', 'Deep thinking'],
        lucky_days: ['Tuesday'],
        lucky_colors: ['Black', 'Red'],
        emoji: '🦂'
    },
    9: {
        name: 'Sagittarius',
        symbol: '♐',
        element: 'Fire',
        ruling: 'Jupiter',
        personality: 'Adventurous, optimistic, free-spirited',
        traits: 'You love travel and new places. You want to be free.',
        friends: [1, 5],
        enemies: [3, 7],
        neutral: [2, 4, 6, 8, 10, 11, 12],
        best_careers: ['Travel Agent', 'Tour Guide', 'Professor', 'Photographer', 'Philosopher'],
        avoid_careers: ['9 to 5 Job', 'Routine Work', 'Management'],
        talents: ['Travel', 'Teaching', 'Philosophy', 'Adventure'],
        lucky_days: ['Thursday'],
        lucky_colors: ['Purple', 'Blue'],
        emoji: '🏹'
    },
    10: {
        name: 'Capricorn',
        symbol: '♑',
        element: 'Earth',
        ruling: 'Saturn',
        personality: 'Disciplined, responsible, ambitious',
        traits: 'You work very hard. Success is your goal.',
        friends: [2, 6],
        enemies: [4, 8],
        neutral: [1, 3, 5, 7, 9, 11, 12],
        best_careers: ['Manager', 'Banker', 'Administrator', 'Teacher', 'Engineer'],
        avoid_careers: ['Risky Business', 'Freelancing', 'Part Time'],
        talents: ['Management', 'Hard work', 'Responsibility', 'Planning'],
        lucky_days: ['Saturday'],
        lucky_colors: ['Brown', 'Black'],
        emoji: '🐐'
    },
    11: {
        name: 'Aquarius',
        symbol: '♒',
        element: 'Air',
        ruling: 'Saturn',
        personality: 'Innovative, humanitarian, independent',
        traits: 'You bring new ideas. You want to help humanity.',
        friends: [3, 7],
        enemies: [1, 9],
        neutral: [2, 4, 5, 6, 8, 10, 12],
        best_careers: ['Scientist', 'Engineer', 'Social Worker', 'Astronomer', 'AI Specialist'],
        avoid_careers: ['Traditional Business', 'Boring Jobs', 'Military'],
        talents: ['Science', 'Technology', 'New ideas', 'Humanity'],
        lucky_days: ['Saturday'],
        lucky_colors: ['Blue', 'Turquoise'],
        emoji: '💧'
    },
    12: {
        name: 'Pisces',
        symbol: '♓',
        element: 'Water',
        ruling: 'Jupiter',
        personality: 'Artistic, compassionate, intuitive',
        traits: 'You are very creative. You understand others\' pain.',
        friends: [4, 8],
        enemies: [2, 6],
        neutral: [1, 3, 5, 7, 9, 10, 11],
        best_careers: ['Artist', 'Musician', 'Nurse', 'Photographer', 'Therapist'],
        avoid_careers: ['Corporate', 'High Pressure Sales', 'Management'],
        talents: ['Art', 'Music', 'Compassion', 'Healing', 'Dreaming'],
        lucky_days: ['Thursday'],
        lucky_colors: ['Sea Green', 'Lavender'],
        emoji: '🐟'
    }
};

// ==================== QUESTION TEMPLATES ====================
const questionTemplates = {
    'career': [
        'Your best career options are {career1} or {career2}.',
        'Your {talent} talent will bring success in {career1}.',
        'A good job opportunity will come in the next 3 months.',
        'You will succeed in {career1} because of your {talent}.'
    ],
    'love': [
        'Your {trait} nature helps in love. Be patient.',
        '{day} is lucky for love decisions.',
        'You are compatible with {friend_stars} signs.',
        'Love will grow if you control your {weakness}.'
    ],
    'marriage': [
        'A partner from {career1} field would be good.',
        '{day} is auspicious for marriage.',
        'Marriage with {enemy_stars} signs may be difficult.',
        'Married life will be happy due to your {trait} nature.'
    ],
    'business': [
        '{career2} business will be profitable.',
        'Start new work on {day}.',
        'Your {talent} will bring business success.',
        'Partnership with {friend_stars} signs will work well.'
    ],
    'education': [
        'You will succeed in {career1} studies.',
        'Exams on {day} will go well.',
        'Your {talent} helps in education.',
        'Focus on {career1} for best results.'
    ],
    'health': [
        'Health is good on {day}.',
        'Your {trait} nature may cause stress.',
        'Eat according to your {element} element.',
        '{color} colors are good for your health.'
    ],
    'general': [
        'Your star {star_name} brings success through {talent}.',
        'Do important work on {day}.',
        '{friend_stars} signs will help you.',
        'Good fortune is coming your way.'
    ]
};

// ==================== UTILITY FUNCTIONS ====================

// Clean name - remove spaces and convert to lowercase
function cleanName(name) {
    return name.toLowerCase().replace(/\s+/g, '');
}

// Calculate Ilm-ul-Adad (supports both Urdu and English)
function calculateIlmAdad(name) {
    if (!name) return 0;
    let total = 0;
    for (let char of name) {
        // Check if character exists in abjad
        if (abjad[char]) {
            total += abjad[char];
        } else {
            // For characters not in table, add ASCII value mod 10
            total += (char.charCodeAt(0) % 10) + 1;
        }
    }
    return total;
}

// Get Star by total (1-12)
function getStar(total) {
    let remainder = total % 12;
    remainder = remainder === 0 ? 12 : remainder;
    return {
        number: remainder,
        ...starMapping[remainder]
    };
}

// Analyze question category
function analyzeQuestion(question) {
    question = question.toLowerCase();
    
    const keywords = {
        'career': ['job', 'career', 'work', 'business', 'profession', 'office'],
        'love': ['love', 'relationship', 'romance', 'girlfriend', 'boyfriend', 'crush'],
        'marriage': ['marriage', 'wedding', 'husband', 'wife', 'bride', 'groom'],
        'business': ['business', 'profit', 'loss', 'trade', 'shop', 'company'],
        'education': ['study', 'exam', 'education', 'university', 'college', 'school', 'degree'],
        'health': ['health', 'sick', 'disease', 'hospital', 'doctor', 'medicine']
    };
    
    for (let [category, words] of Object.entries(keywords)) {
        for (let word of words) {
            if (question.includes(word)) {
                return category;
            }
        }
    }
    
    return 'general';
}

// Generate personalized answer
function generateAnswer(star, question, day) {
    const category = analyzeQuestion(question);
    const templates = questionTemplates[category] || questionTemplates['general'];
    
    // Get random template
    let template = templates[Math.floor(Math.random() * templates.length)];
    
    // Replace placeholders
    let answer = template
        .replace('{star_name}', star.name)
        .replace('{trait}', star.personality.split(',')[0])
        .replace('{element}', star.element)
        .replace('{talent}', star.talents[Math.floor(Math.random() * star.talents.length)])
        .replace('{career1}', star.best_careers[0])
        .replace('{career2}', star.best_careers[1] || star.best_careers[0])
        .replace('{day}', star.lucky_days[0])
        .replace('{color}', star.lucky_colors[0])
        .replace('{friend_stars}', star.friends.map(f => starMapping[f].name).join(', '))
        .replace('{enemy_stars}', star.enemies.map(e => starMapping[e].name).join(', '))
        .replace('{weakness}', 'impatience');
    
    // Add day effect
    const dayLord = dayLords[day];
    if (dayLord) {
        answer += ` Today is ${day} (ruled by ${dayLord.name}), so you feel ${dayLord.quality}.`;
    }
    
    return answer;
}

// Calculate marriage compatibility
function calculateCompatibility(star1, star2) {
    let score = 0;
    let details = [];
    
    // 1. Friendship status (40 points)
    if (star1.friends.includes(star2.number)) {
        score += 35;
        details.push('✅ Stars are friends - natural harmony');
    } else if (star1.enemies.includes(star2.number)) {
        score += 15;
        details.push('⚠️ Stars are enemies - challenges expected');
    } else {
        score += 25;
        details.push('🟡 Stars are neutral - effort required');
    }
    
    // 2. Element compatibility (30 points)
    const elementScores = {
        'Fire': { 'Fire': 25, 'Earth': 20, 'Air': 28, 'Water': 15 },
        'Earth': { 'Fire': 20, 'Earth': 28, 'Air': 15, 'Water': 25 },
        'Air': { 'Fire': 28, 'Earth': 15, 'Air': 25, 'Water': 20 },
        'Water': { 'Fire': 15, 'Earth': 25, 'Air': 20, 'Water': 28 }
    };
    
    const elementScore = elementScores[star1.element][star2.element];
    score += elementScore;
    details.push(`🌍 ${star1.element} & ${star2.element}: ${elementScore}/30`);
    
    // 3. Personality match (30 points)
    if (star1.number === star2.number) {
        score += 25;
        details.push('💫 Same stars - high similarity');
    } else if (Math.abs(star1.number - star2.number) === 6) {
        score += 15;
        details.push('🔄 Opposite stars - need balance');
    } else {
        score += 20;
        details.push('💭 Moderate similarity');
    }
    
    // Final verdict
    let verdict = '';
    if (score >= 75) verdict = '💚 EXCELLENT - Marriage will be successful';
    else if (score >= 60) verdict = '💙 GOOD - Effort needed but works';
    else if (score >= 45) verdict = '💛 AVERAGE - Challenges but possible';
    else verdict = '❤️ DIFFICULT - Think carefully';
    
    return {
        score: Math.min(100, score),
        details: details,
        verdict: verdict
    };
}

// ==================== UI FUNCTIONS ====================

// Show Individual Analysis Form
function showIndividual() {
    const container = document.getElementById('toolContainer');
    container.style.display = 'block';
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOptions = days.map(day => 
        `<option value="${day}">${day}</option>`
    ).join('');
    
    container.innerHTML = `
        <div>
            <h2 class="tool-title">
                <i class="fas fa-user-astronaut"></i>
                Individual Star Analysis
            </h2>
            
            <div class="form-group">
                <label class="form-label">
                    <i class="fas fa-user"></i>
                    Your Full Name
                </label>
                <input type="text" id="userName" class="form-input" placeholder="e.g., John Smith">
            </div>
            
            <div class="form-group">
                <label class="form-label">
                    <i class="fas fa-female"></i>
                    Mother's Full Name
                </label>
                <input type="text" id="motherName" class="form-input" placeholder="e.g., Mary Smith">
            </div>
            
            <div class="form-group">
                <label class="form-label">
                    <i class="fas fa-calendar"></i>
                    Day of Question
                </label>
                <select id="questionDay" class="form-select">
                    ${dayOptions}
                </select>
            </div>
            
            <div class="form-group">
                <label class="form-label">
                    <i class="fas fa-question-circle"></i>
                    Your Question
                </label>
                <textarea id="questionText" class="form-textarea" placeholder="e.g., Will I get a job?"></textarea>
            </div>
            
            <div class="button-group">
                <button onclick="handleIndividual()" class="action-btn btn-primary">
                    <i class="fas fa-calculator"></i>
                    Get Answer
                </button>
                <button onclick="clearForm()" class="action-btn btn-clear">
                    <i class="fas fa-broom"></i>
                    Clear
                </button>
                <button onclick="hideTool()" class="action-btn btn-back">
                    <i class="fas fa-arrow-left"></i>
                    Back
                </button>
            </div>
            
            <div id="individualResult"></div>
        </div>
    `;
    
    container.scrollIntoView({ behavior: 'smooth' });
}

// Handle Individual Calculation
function handleIndividual() {
    const userName = document.getElementById('userName').value.trim();
    const motherName = document.getElementById('motherName').value.trim();
    const questionDay = document.getElementById('questionDay').value;
    const questionText = document.getElementById('questionText').value.trim();
    
    if (!userName || !motherName || !questionText) {
        alert('❌ Please fill all fields!');
        return;
    }
    
    // Show loading
    document.getElementById('individualResult').innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner"></i>
            <span>Calculating your future...</span>
        </div>
    `;
    
    // Calculate with slight delay for effect
    setTimeout(() => {
        // Calculate totals - THIS IS FIXED
        const userTotal = calculateIlmAdad(cleanName(userName));
        const motherTotal = calculateIlmAdad(cleanName(motherName));
        const combined = userTotal + motherTotal;
        
        // Get star - THIS WILL BE DIFFERENT for different names
        const star = getStar(combined);
        
        // Generate answer
        const answer = generateAnswer(star, questionText, questionDay);
        
        document.getElementById('individualResult').innerHTML = `
            <div class="result-card">
                <div class="star-badge">
                    <i class="fas fa-star"></i>
                    ${star.name} ${star.symbol} ${star.emoji}
                </div>
                
                <div class="star-grid">
                    <div class="star-info">
                        <h3><i class="fas fa-calculator"></i> Calculation</h3>
                        <p><i class="fas fa-user"></i> Your Name: ${userTotal}</p>
                        <p><i class="fas fa-female"></i> Mother's Name: ${motherTotal}</p>
                        <p><i class="fas fa-plus-circle"></i> Combined: ${combined}</p>
                        <p><i class="fas fa-star"></i> Star Number: ${star.number}</p>
                    </div>
                    
                    <div class="star-info">
                        <h3><i class="fas fa-info-circle"></i> Your Star</h3>
                        <p><i class="fas fa-fire"></i> Element: ${star.element}</p>
                        <p><i class="fas fa-globe"></i> Ruling: ${star.ruling}</p>
                        <p><i class="fas fa-brain"></i> Nature: ${star.personality}</p>
                        <p><i class="fas fa-palette"></i> Lucky: ${star.lucky_colors.join(', ')}</p>
                    </div>
                </div>
                
                <div class="star-info">
                    <h3><i class="fas fa-star-and-crescent"></i> Your Answer</h3>
                    <p style="font-size: 1.2rem; line-height: 1.6;">${answer}</p>
                </div>
            </div>
        `;
    }, 800);
}

// Show Marriage Compatibility Form
function showMarriage() {
    const container = document.getElementById('toolContainer');
    container.style.display = 'block';
    
    container.innerHTML = `
        <div>
            <h2 class="tool-title">
                <i class="fas fa-heart"></i>
                Marriage Compatibility
            </h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <!-- Boy's Section -->
                <div>
                    <h3 style="font-size: 1.3rem; color: #2c3e50; margin-bottom: 15px;">
                        <i class="fas fa-male" style="color: #4a90e2;"></i> Boy's Information
                    </h3>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-user"></i>
                            Full Name
                        </label>
                        <input type="text" id="boyName" class="form-input" placeholder="e.g., John Smith">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-female"></i>
                            Mother's Name
                        </label>
                        <input type="text" id="boyMother" class="form-input" placeholder="e.g., Mary Smith">
                    </div>
                </div>
                
                <!-- Girl's Section -->
                <div>
                    <h3 style="font-size: 1.3rem; color: #2c3e50; margin-bottom: 15px;">
                        <i class="fas fa-female" style="color: #e2556b;"></i> Girl's Information
                    </h3>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-user"></i>
                            Full Name
                        </label>
                        <input type="text" id="girlName" class="form-input" placeholder="e.g., Jane Smith">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-female"></i>
                            Mother's Name
                        </label>
                        <input type="text" id="girlMother" class="form-input" placeholder="e.g., Sarah Smith">
                    </div>
                </div>
            </div>
            
            <div class="button-group">
                <button onclick="handleMarriage()" class="action-btn btn-secondary">
                    <i class="fas fa-heart"></i>
                    Check Compatibility
                </button>
                <button onclick="clearMarriageForm()" class="action-btn btn-clear">
                    <i class="fas fa-broom"></i>
                    Clear
                </button>
                <button onclick="hideTool()" class="action-btn btn-back">
                    <i class="fas fa-arrow-left"></i>
                    Back
                </button>
            </div>
            
            <div id="marriageResult"></div>
        </div>
    `;
    
    container.scrollIntoView({ behavior: 'smooth' });
}

// Handle Marriage Calculation - FIXED VERSION
function handleMarriage() {
    const boyName = document.getElementById('boyName').value.trim();
    const boyMother = document.getElementById('boyMother').value.trim();
    const girlName = document.getElementById('girlName').value.trim();
    const girlMother = document.getElementById('girlMother').value.trim();
    
    if (!boyName || !boyMother || !girlName || !girlMother) {
        alert('❌ Please fill all fields!');
        return;
    }
    
    // Show loading
    document.getElementById('marriageResult').innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner"></i>
            <span>Analyzing compatibility...</span>
        </div>
    `;
    
    setTimeout(() => {
        // Calculate boy's star - DIFFERENT from girl's
        const boyTotal = calculateIlmAdad(cleanName(boyName)) + calculateIlmAdad(cleanName(boyMother));
        const girlTotal = calculateIlmAdad(cleanName(girlName)) + calculateIlmAdad(cleanName(girlMother));
        
        const boyStar = getStar(boyTotal);
        const girlStar = getStar(girlTotal);
        const compatibility = calculateCompatibility(boyStar, girlStar);
        
        // Progress bar color
        let progressColor = 'red';
        if (compatibility.score >= 75) progressColor = 'green';
        else if (compatibility.score >= 60) progressColor = 'blue';
        else if (compatibility.score >= 45) progressColor = 'yellow';
        
        document.getElementById('marriageResult').innerHTML = `
            <div class="result-card marriage">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <!-- Boy's Star -->
                    <div class="star-info">
                        <h3 style="color: #4a90e2;">
                            <i class="fas fa-male"></i> Boy's Star
                        </h3>
                        <p><i class="fas fa-star"></i> ${boyStar.name} ${boyStar.symbol} ${boyStar.emoji}</p>
                        <p><i class="fas fa-fire"></i> Element: ${boyStar.element}</p>
                        <p><i class="fas fa-globe"></i> Ruling: ${boyStar.ruling}</p>
                        <p><i class="fas fa-brain"></i> ${boyStar.personality}</p>
                        <p><i class="fas fa-calculator"></i> Total: ${boyTotal}</p>
                    </div>
                    
                    <!-- Girl's Star -->
                    <div class="star-info">
                        <h3 style="color: #e2556b;">
                            <i class="fas fa-female"></i> Girl's Star
                        </h3>
                        <p><i class="fas fa-star"></i> ${girlStar.name} ${girlStar.symbol} ${girlStar.emoji}</p>
                        <p><i class="fas fa-fire"></i> Element: ${girlStar.element}</p>
                        <p><i class="fas fa-globe"></i> Ruling: ${girlStar.ruling}</p>
                        <p><i class="fas fa-brain"></i> ${girlStar.personality}</p>
                        <p><i class="fas fa-calculator"></i> Total: ${girlTotal}</p>
                    </div>
                </div>
                
                <!-- Compatibility Score -->
                <div class="star-info">
                    <h3><i class="fas fa-chart-line"></i> Compatibility Score: ${compatibility.score}%</h3>
                    <div class="progress-bar">
                        <div class="progress-fill ${progressColor}" style="width: ${compatibility.score}%">
                            ${compatibility.score}%
                        </div>
                    </div>
                    
                    <h3 style="margin-top: 20px;"><i class="fas fa-list"></i> Detailed Analysis</h3>
                    <ul style="list-style: none; padding: 0;">
                        ${compatibility.details.map(d => 
                            `<li style="margin: 10px 0;">${d}</li>`
                        ).join('')}
                    </ul>
                    
                    <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 15px;">
                        <h3><i class="fas fa-gem"></i> Final Verdict</h3>
                        <p style="font-size: 1.2rem; font-weight: 600;">${compatibility.verdict}</p>
                    </div>
                </div>
            </div>
        `;
    }, 800);
}

// Clear Individual Form
function clearForm() {
    if (document.getElementById('userName')) document.getElementById('userName').value = '';
    if (document.getElementById('motherName')) document.getElementById('motherName').value = '';
    if (document.getElementById('questionText')) document.getElementById('questionText').value = '';
    document.getElementById('individualResult').innerHTML = '';
}

// Clear Marriage Form
function clearMarriageForm() {
    if (document.getElementById('boyName')) document.getElementById('boyName').value = '';
    if (document.getElementById('boyMother')) document.getElementById('boyMother').value = '';
    if (document.getElementById('girlName')) document.getElementById('girlName').value = '';
    if (document.getElementById('girlMother')) document.getElementById('girlMother').value = '';
    document.getElementById('marriageResult').innerHTML = '';
}

// Hide Tool (Go Back)
function hideTool() {
    const container = document.getElementById('toolContainer');
    container.style.display = 'none';
    container.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}