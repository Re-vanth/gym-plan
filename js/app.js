// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('ServiceWorker registered:', registration.scope);
            })
            .catch((error) => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// ===== DATABASES =====

// Stretching/Warm-up Database
const stretchDatabase = {
    dynamic: [
        { name: 'Arm Circles', duration: 30, icon: '🔄', description: 'Forward and backward circles', target: 'shoulders' },
        { name: 'Leg Swings', duration: 30, icon: '🦵', description: 'Front to back, side to side', target: 'hips' },
        { name: 'Hip Circles', duration: 30, icon: '⭕', description: 'Large circular motions', target: 'hips' },
        { name: 'Walking Knee Hugs', duration: 30, icon: '🚶', description: 'Pull knee to chest while walking', target: 'hips' },
        { name: 'High Knees', duration: 30, icon: '🏃', description: 'Drive knees up rapidly', target: 'cardio' },
        { name: 'Butt Kicks', duration: 30, icon: '👟', description: 'Kick heels to glutes', target: 'quads' },
        { name: 'Jumping Jacks', duration: 30, icon: '⭐', description: 'Classic cardio warm-up', target: 'full body' },
        { name: 'Torso Twists', duration: 30, icon: '🌀', description: 'Rotate upper body side to side', target: 'core' }
    ],
    upper: [
        { name: 'Shoulder Rolls', duration: 30, icon: '🔄', description: 'Roll shoulders forward and back', target: 'shoulders' },
        { name: 'Arm Circles', duration: 30, icon: '💪', description: 'Small to large circles', target: 'shoulders' },
        { name: 'Cross-Body Shoulder Stretch', duration: 30, icon: '🤗', description: 'Pull arm across chest', target: 'shoulders' },
        { name: 'Tricep Stretch', duration: 30, icon: '🙆', description: 'Elbow behind head', target: 'triceps' },
        { name: 'Chest Opener', duration: 30, icon: '🦅', description: 'Arms back, chest forward', target: 'chest' },
        { name: 'Wrist Circles', duration: 20, icon: '🖐️', description: 'Rotate wrists both ways', target: 'wrists' }
    ],
    lower: [
        { name: 'Hip Circles', duration: 30, icon: '⭕', description: 'Large hip rotations', target: 'hips' },
        { name: 'Leg Swings Forward', duration: 30, icon: '🦵', description: 'Swing leg front to back', target: 'hip flexors' },
        { name: 'Leg Swings Lateral', duration: 30, icon: '↔️', description: 'Swing leg side to side', target: 'adductors' },
        { name: 'Walking Lunges', duration: 40, icon: '🚶', description: 'Deep lunge steps', target: 'quads' },
        { name: 'Quad Stretch', duration: 30, icon: '🦿', description: 'Pull heel to glute', target: 'quads' },
        { name: 'Hamstring Sweep', duration: 30, icon: '🧹', description: 'Hinge and reach to toes', target: 'hamstrings' },
        { name: 'Calf Raises', duration: 30, icon: '⬆️', description: 'Rise onto toes slowly', target: 'calves' }
    ],
    full: [
        { name: 'Neck Rolls', duration: 20, icon: '😌', description: 'Gentle neck circles', target: 'neck' },
        { name: 'Shoulder Rolls', duration: 20, icon: '🔄', description: 'Forward and backward', target: 'shoulders' },
        { name: 'Arm Circles', duration: 30, icon: '💪', description: 'Increasing size', target: 'shoulders' },
        { name: 'Torso Twists', duration: 30, icon: '🌀', description: 'Rotate side to side', target: 'core' },
        { name: 'Hip Circles', duration: 30, icon: '⭕', description: 'Large circular motions', target: 'hips' },
        { name: 'Leg Swings', duration: 30, icon: '🦵', description: 'All directions', target: 'hips' },
        { name: 'Walking Lunges', duration: 40, icon: '🚶', description: 'Deep stretch steps', target: 'legs' },
        { name: 'Jumping Jacks', duration: 30, icon: '⭐', description: 'Get heart rate up', target: 'cardio' }
    ],
    quick: [
        { name: 'Arm Circles', duration: 20, icon: '🔄', description: 'Quick shoulder warm-up', target: 'shoulders' },
        { name: 'High Knees', duration: 30, icon: '🏃', description: 'Rapid knee drives', target: 'cardio' },
        { name: 'Hip Circles', duration: 20, icon: '⭕', description: 'Loosen the hips', target: 'hips' },
        { name: 'Bodyweight Squats', duration: 30, icon: '🏋️', description: '10 slow squats', target: 'legs' },
        { name: 'Jumping Jacks', duration: 30, icon: '⭐', description: 'Full body activation', target: 'cardio' }
    ]
};

// Exercise Database
const exerciseDatabase = {
    push: [
        { name: 'Barbell Bench Press', sets: 4, reps: '8-10', muscle: 'chest', equipment: 'Power Rack + Bench', video: 'https://www.youtube.com/watch?v=rT7DgCr-3pg' },
        { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', muscle: 'chest', equipment: 'Adjustable Bench + Dumbbells', video: 'https://www.youtube.com/watch?v=8iPEnn-ltC8' },
        { name: 'Shoulder Press Machine', sets: 4, reps: '10-12', muscle: 'shoulders', equipment: 'Shoulder Press Machine', video: 'https://www.youtube.com/watch?v=Wqq43dKW1TU' },
        { name: 'Dumbbell Lateral Raises', sets: 3, reps: '12-15', muscle: 'shoulders', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=3VcKaXpzqRo' },
        { name: 'Captain\'s Chair Dips', sets: 3, reps: '10-12', muscle: 'triceps', equipment: 'Captain\'s Chair', video: 'https://www.youtube.com/watch?v=yN6Q1UI_xkE' },
        { name: 'Dumbbell Skull Crushers', sets: 3, reps: '10-12', muscle: 'triceps', equipment: 'Bench + Dumbbells', video: 'https://www.youtube.com/watch?v=ir5PsbniVSc' }
    ],
    pull: [
        { name: 'Barbell Deadlift', sets: 4, reps: '5-6', muscle: 'back', equipment: 'Power Rack + Barbell', video: 'https://www.youtube.com/watch?v=op9kVnSso6Q' },
        { name: 'Pull-ups', sets: 4, reps: '6-10', muscle: 'back', equipment: 'Power Rack Bar', video: 'https://www.youtube.com/watch?v=eGo4IYlbE5g' },
        { name: 'Dumbbell Rows', sets: 4, reps: '10-12', muscle: 'back', equipment: 'Bench + Dumbbells', video: 'https://www.youtube.com/watch?v=roCP6wCXPqo' },
        { name: 'Dumbbell Shrugs', sets: 3, reps: '12-15', muscle: 'traps', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=cJRVVxmytaM' },
        { name: 'Dumbbell Bicep Curls', sets: 3, reps: '10-12', muscle: 'biceps', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo' },
        { name: 'Dumbbell Hammer Curls', sets: 3, reps: '10-12', muscle: 'biceps', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=zC3nLlEvin4' }
    ],
    legs: [
        { name: 'Barbell Squats', sets: 4, reps: '8-10', muscle: 'quads', equipment: 'Power Rack', video: 'https://www.youtube.com/watch?v=ultWZbUMPL8' },
        { name: 'Romanian Deadlift', sets: 4, reps: '10-12', muscle: 'hamstrings', equipment: 'Barbell or Dumbbells', video: 'https://www.youtube.com/watch?v=7j-2w4-P14I' },
        { name: 'Leg Extensions', sets: 3, reps: '12-15', muscle: 'quads', equipment: 'Leg Extension Machine', video: 'https://www.youtube.com/watch?v=YyvSfVjQeL0' },
        { name: 'Leg Curls', sets: 3, reps: '12-15', muscle: 'hamstrings', equipment: 'Leg Curl Machine', video: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs' },
        { name: 'Dumbbell Lunges', sets: 3, reps: '10 each', muscle: 'quads', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=D7KaRcUTQeE' },
        { name: 'Dumbbell Calf Raises', sets: 4, reps: '15-20', muscle: 'calves', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=-M4-G8p8fmc' }
    ],
    upper: [
        { name: 'Barbell Bench Press', sets: 4, reps: '8-10', muscle: 'chest', equipment: 'Power Rack + Bench', video: 'https://www.youtube.com/watch?v=rT7DgCr-3pg' },
        { name: 'Pull-ups', sets: 4, reps: '6-10', muscle: 'back', equipment: 'Power Rack Bar', video: 'https://www.youtube.com/watch?v=eGo4IYlbE5g' },
        { name: 'Shoulder Press Machine', sets: 3, reps: '10-12', muscle: 'shoulders', equipment: 'Shoulder Press Machine', video: 'https://www.youtube.com/watch?v=Wqq43dKW1TU' },
        { name: 'Dumbbell Rows', sets: 3, reps: '10-12', muscle: 'back', equipment: 'Bench + Dumbbells', video: 'https://www.youtube.com/watch?v=roCP6wCXPqo' },
        { name: 'Dumbbell Curls', sets: 3, reps: '10-12', muscle: 'biceps', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo' },
        { name: 'Captain\'s Chair Dips', sets: 3, reps: '10-12', muscle: 'triceps', equipment: 'Captain\'s Chair', video: 'https://www.youtube.com/watch?v=yN6Q1UI_xkE' }
    ],
    lower: [
        { name: 'Barbell Squats', sets: 4, reps: '8-10', muscle: 'quads', equipment: 'Power Rack', video: 'https://www.youtube.com/watch?v=ultWZbUMPL8' },
        { name: 'Romanian Deadlift', sets: 4, reps: '10-12', muscle: 'hamstrings', equipment: 'Barbell', video: 'https://www.youtube.com/watch?v=7j-2w4-P14I' },
        { name: 'Dumbbell Bulgarian Split Squats', sets: 3, reps: '10 each', muscle: 'quads', equipment: 'Bench + Dumbbells', video: 'https://www.youtube.com/watch?v=2C-uNgKwPLE' },
        { name: 'Leg Extensions', sets: 3, reps: '12-15', muscle: 'quads', equipment: 'Leg Extension Machine', video: 'https://www.youtube.com/watch?v=YyvSfVjQeL0' },
        { name: 'Leg Curls', sets: 3, reps: '12-15', muscle: 'hamstrings', equipment: 'Leg Curl Machine', video: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs' },
        { name: 'Dumbbell Calf Raises', sets: 4, reps: '15-20', muscle: 'calves', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=-M4-G8p8fmc' }
    ],
    fullbody: [
        { name: 'Barbell Squats', sets: 3, reps: '8-10', muscle: 'legs', equipment: 'Power Rack', video: 'https://www.youtube.com/watch?v=ultWZbUMPL8' },
        { name: 'Barbell Bench Press', sets: 3, reps: '8-10', muscle: 'chest', equipment: 'Power Rack + Bench', video: 'https://www.youtube.com/watch?v=rT7DgCr-3pg' },
        { name: 'Pull-ups', sets: 3, reps: '6-10', muscle: 'back', equipment: 'Power Rack Bar', video: 'https://www.youtube.com/watch?v=eGo4IYlbE5g' },
        { name: 'Shoulder Press Machine', sets: 3, reps: '10-12', muscle: 'shoulders', equipment: 'Shoulder Press Machine', video: 'https://www.youtube.com/watch?v=Wqq43dKW1TU' },
        { name: 'Leg Curls', sets: 3, reps: '12-15', muscle: 'hamstrings', equipment: 'Leg Curl Machine', video: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs' },
        { name: 'Captain\'s Chair Knee Raises', sets: 3, reps: '12-15', muscle: 'core', equipment: 'Captain\'s Chair', video: 'https://www.youtube.com/watch?v=hdng3Nm1x_E' }
    ]
};

// All exercises for library
const allExercises = [
    { name: 'Barbell Bench Press', muscle: 'chest', description: 'Compound chest builder', equipment: 'Power Rack + Bench', video: 'https://www.youtube.com/watch?v=rT7DgCr-3pg' },
    { name: 'Incline Dumbbell Press', muscle: 'chest', description: 'Upper chest focus', equipment: 'Adjustable Bench + Dumbbells', video: 'https://www.youtube.com/watch?v=8iPEnn-ltC8' },
    { name: 'Flat Dumbbell Press', muscle: 'chest', description: 'Chest compound', equipment: 'Bench + Dumbbells', video: 'https://www.youtube.com/watch?v=VmB1G1K7v94' },
    { name: 'Dumbbell Flyes', muscle: 'chest', description: 'Chest isolation', equipment: 'Bench + Dumbbells', video: 'https://www.youtube.com/watch?v=eozdVDA78K0' },
    { name: 'Push-ups', muscle: 'chest', description: 'Bodyweight push', equipment: 'None', video: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
    { name: 'Pull-ups', muscle: 'back', description: 'Vertical pull', equipment: 'Power Rack Bar', video: 'https://www.youtube.com/watch?v=eGo4IYlbE5g' },
    { name: 'Chin-ups', muscle: 'back', description: 'Bicep-focused pull', equipment: 'Power Rack Bar', video: 'https://www.youtube.com/watch?v=brhRXlOhsAM' },
    { name: 'Barbell Rows', muscle: 'back', description: 'Horizontal pull', equipment: 'Barbell', video: 'https://www.youtube.com/watch?v=FWJR5Ve8bnQ' },
    { name: 'Dumbbell Rows', muscle: 'back', description: 'Unilateral back', equipment: 'Bench + Dumbbells', video: 'https://www.youtube.com/watch?v=roCP6wCXPqo' },
    { name: 'Barbell Deadlift', muscle: 'back', description: 'Full body compound', equipment: 'Power Rack + Barbell', video: 'https://www.youtube.com/watch?v=op9kVnSso6Q' },
    { name: 'Shoulder Press Machine', muscle: 'shoulders', description: 'Machine shoulder press', equipment: 'Shoulder Press Machine', video: 'https://www.youtube.com/watch?v=Wqq43dKW1TU' },
    { name: 'Dumbbell Shoulder Press', muscle: 'shoulders', description: 'Overhead press', equipment: 'Bench + Dumbbells', video: 'https://www.youtube.com/watch?v=qEwKCR5JCog' },
    { name: 'Dumbbell Lateral Raises', muscle: 'shoulders', description: 'Side delt isolation', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=3VcKaXpzqRo' },
    { name: 'Dumbbell Shrugs', muscle: 'shoulders', description: 'Trap builder', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=cJRVVxmytaM' },
    { name: 'Dumbbell Bicep Curls', muscle: 'arms', description: 'Bicep builder', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo' },
    { name: 'Dumbbell Hammer Curls', muscle: 'arms', description: 'Brachialis focus', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=zC3nLlEvin4' },
    { name: 'Dumbbell Skull Crushers', muscle: 'arms', description: 'Tricep isolation', equipment: 'Bench + Dumbbells', video: 'https://www.youtube.com/watch?v=ir5PsbniVSc' },
    { name: 'Captain\'s Chair Dips', muscle: 'arms', description: 'Tricep compound', equipment: 'Captain\'s Chair', video: 'https://www.youtube.com/watch?v=yN6Q1UI_xkE' },
    { name: 'Barbell Squats', muscle: 'legs', description: 'Quad dominant compound', equipment: 'Power Rack', video: 'https://www.youtube.com/watch?v=ultWZbUMPL8' },
    { name: 'Romanian Deadlift', muscle: 'legs', description: 'Hamstring focus', equipment: 'Barbell or Dumbbells', video: 'https://www.youtube.com/watch?v=7j-2w4-P14I' },
    { name: 'Leg Extensions', muscle: 'legs', description: 'Quad isolation', equipment: 'Leg Extension Machine', video: 'https://www.youtube.com/watch?v=YyvSfVjQeL0' },
    { name: 'Leg Curls', muscle: 'legs', description: 'Hamstring isolation', equipment: 'Leg Curl Machine', video: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs' },
    { name: 'Dumbbell Lunges', muscle: 'legs', description: 'Unilateral compound', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=D7KaRcUTQeE' },
    { name: 'Dumbbell Calf Raises', muscle: 'legs', description: 'Calf isolation', equipment: 'Dumbbells', video: 'https://www.youtube.com/watch?v=-M4-G8p8fmc' },
    { name: 'Captain\'s Chair Knee Raises', muscle: 'core', description: 'Lower abs focus', equipment: 'Captain\'s Chair', video: 'https://www.youtube.com/watch?v=hdng3Nm1x_E' },
    { name: 'Plank', muscle: 'core', description: 'Isometric core hold', equipment: 'None', video: 'https://www.youtube.com/watch?v=ASdvN_XEl_c' }
];

// ===== APP STATE =====
let workoutInProgress = false;
let currentWorkout = [];
let completedExercises = [];
let workoutStartTime = null;

// Warm-up State
let currentStretches = [];
let completedStretches = [];
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let currentStretchIndex = 0;

// Rest Timer State
let restTimerInterval = null;
let restTimerSeconds = 0;
let restTimerRunning = false;
let selectedRestTime = 90;

// Personal Records
let personalRecords = {};

// Weekly Plan
let weeklyPlan = {
    mon: 'rest',
    tue: 'rest',
    wed: 'rest',
    thu: 'rest',
    fri: 'rest',
    sat: 'rest',
    sun: 'rest'
};

// Exercise Notes
let exerciseNotes = {};

// Custom Workouts
let customWorkouts = [];

// Exercise Alternatives Database
const exerciseAlternatives = {
    'Barbell Bench Press': ['Dumbbell Bench Press', 'Push-ups', 'Incline Dumbbell Press', 'Dumbbell Flyes'],
    'Incline Dumbbell Press': ['Barbell Bench Press', 'Incline Push-ups', 'Flat Dumbbell Press'],
    'Shoulder Press Machine': ['Dumbbell Shoulder Press', 'Barbell Overhead Press', 'Arnold Press'],
    'Dumbbell Lateral Raises': ['Cable Lateral Raises', 'Dumbbell Front Raises', 'Plate Front Raises'],
    'Captain\'s Chair Dips': ['Bench Dips', 'Tricep Pushdowns', 'Diamond Push-ups'],
    'Dumbbell Skull Crushers': ['Overhead Tricep Extension', 'Tricep Kickbacks', 'Close-grip Push-ups'],
    'Barbell Deadlift': ['Romanian Deadlift', 'Dumbbell Deadlift', 'Trap Bar Deadlift'],
    'Pull-ups': ['Lat Pulldowns', 'Chin-ups', 'Assisted Pull-ups', 'Inverted Rows'],
    'Dumbbell Rows': ['Barbell Rows', 'Cable Rows', 'T-Bar Rows'],
    'Dumbbell Shrugs': ['Barbell Shrugs', 'Trap Bar Shrugs', 'Cable Shrugs'],
    'Dumbbell Bicep Curls': ['Barbell Curls', 'Hammer Curls', 'Concentration Curls'],
    'Dumbbell Hammer Curls': ['Rope Hammer Curls', 'Cross-body Hammer Curls', 'Bicep Curls'],
    'Barbell Squats': ['Goblet Squats', 'Leg Press', 'Dumbbell Squats', 'Bulgarian Split Squats'],
    'Romanian Deadlift': ['Stiff-Leg Deadlift', 'Good Mornings', 'Leg Curls'],
    'Leg Extensions': ['Sissy Squats', 'Front Squats', 'Walking Lunges'],
    'Leg Curls': ['Romanian Deadlift', 'Nordic Curls', 'Glute-Ham Raises'],
    'Dumbbell Lunges': ['Walking Lunges', 'Reverse Lunges', 'Step-ups', 'Bulgarian Split Squats'],
    'Dumbbell Calf Raises': ['Standing Calf Raises', 'Seated Calf Raises', 'Donkey Calf Raises'],
    'Dumbbell Bulgarian Split Squats': ['Lunges', 'Step-ups', 'Single-Leg Press'],
    'Captain\'s Chair Knee Raises': ['Hanging Knee Raises', 'Lying Leg Raises', 'Reverse Crunches']
};

// Settings
let settings = {
    soundEnabled: true,
    darkMode: true,
    defaultRestTime: 90,
    reminderTime: '09:00',
    weeklyGoal: 4
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    initApp();
});

function loadSettings() {
    const savedSettings = localStorage.getItem('appSettings');
    if (savedSettings) {
        settings = { ...settings, ...JSON.parse(savedSettings) };
    }
    
    // Load personal records
    const savedPRs = localStorage.getItem('personalRecords');
    if (savedPRs) {
        personalRecords = JSON.parse(savedPRs);
    }
    
    // Load weekly plan
    const savedPlan = localStorage.getItem('weeklyPlan');
    if (savedPlan) {
        weeklyPlan = JSON.parse(savedPlan);
    }
    
    // Load exercise notes
    const savedNotes = localStorage.getItem('exerciseNotes');
    if (savedNotes) {
        exerciseNotes = JSON.parse(savedNotes);
    }
    
    // Load custom workouts
    const savedCustom = localStorage.getItem('customWorkouts');
    if (savedCustom) {
        customWorkouts = JSON.parse(savedCustom);
    }
    
    applyTheme();
}

function saveSettings() {
    localStorage.setItem('appSettings', JSON.stringify(settings));
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', settings.darkMode ? 'dark' : 'light');
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.checked = !settings.darkMode;
    }
    updateHeaderThemeIcon();
}

function updateHeaderThemeIcon() {
    const headerThemeBtn = document.getElementById('headerThemeBtn');
    if (headerThemeBtn) {
        headerThemeBtn.textContent = settings.darkMode ? '🌙' : '☀️';
        headerThemeBtn.title = settings.darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
}

function initApp() {
    updateCurrentDate();
    
    const warmupTypeSelect = document.getElementById('warmupType');
    const workoutTypeSelect = document.getElementById('workoutType');
    
    if (warmupTypeSelect) loadWarmup(warmupTypeSelect.value);
    if (workoutTypeSelect) loadWorkout(workoutTypeSelect.value);
    
    renderExerciseLibrary();
    updateStats();
    renderWorkoutHistory();
    renderPersonalRecords();
    renderWeeklyPlanner();
    renderProgressChart();
    renderMuscleRecovery();
    renderAchievements();
    renderCustomWorkouts();
    renderGoalProgress();
    updateWorkoutSelector();
    setupEventListeners();
    updateOnlineStatus();
}

function updateCurrentDate() {
    const currentDateEl = document.getElementById('currentDate');
    if (currentDateEl) {
        const options = { weekday: 'long', month: 'short', day: 'numeric' };
        currentDateEl.textContent = new Date().toLocaleDateString('en-US', options);
    }
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    
    // Warm-up
    const warmupTypeSelect = document.getElementById('warmupType');
    if (warmupTypeSelect) {
        warmupTypeSelect.addEventListener('change', (e) => {
            loadWarmup(e.target.value);
            resetTimer();
        });
    }
    
    // Timer controls
    const startTimerBtn = document.getElementById('startTimer');
    const pauseTimerBtn = document.getElementById('pauseTimer');
    const resetTimerBtn = document.getElementById('resetTimer');
    const completeWarmupBtn = document.getElementById('completeWarmup');
    
    if (startTimerBtn) startTimerBtn.addEventListener('click', startTimer);
    if (pauseTimerBtn) pauseTimerBtn.addEventListener('click', pauseTimer);
    if (resetTimerBtn) resetTimerBtn.addEventListener('click', resetTimer);
    if (completeWarmupBtn) completeWarmupBtn.addEventListener('click', completeWarmup);
    
    // Workout
    const workoutTypeSelect = document.getElementById('workoutType');
    const startWorkoutBtn = document.getElementById('startWorkout');
    const finishWorkoutBtn = document.getElementById('finishWorkout');
    
    if (workoutTypeSelect) {
        workoutTypeSelect.addEventListener('change', (e) => {
            if (!workoutInProgress) loadWorkout(e.target.value);
        });
    }
    if (startWorkoutBtn) startWorkoutBtn.addEventListener('click', startWorkout);
    if (finishWorkoutBtn) finishWorkoutBtn.addEventListener('click', finishWorkout);
    
    // Search and filter
    const exerciseSearchInput = document.getElementById('exerciseSearch');
    if (exerciseSearchInput) {
        exerciseSearchInput.addEventListener('input', (e) => {
            filterExercises(e.target.value, getActiveFilter());
        });
    }
    
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const searchInput = document.getElementById('exerciseSearch');
            filterExercises(searchInput ? searchInput.value : '', chip.dataset.filter);
        });
    });
    
    // Theme toggle (settings checkbox)
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', (e) => {
            settings.darkMode = !e.target.checked;
            saveSettings();
            applyTheme();
            updateHeaderThemeIcon();
        });
    }
    
    // Header theme button (quick toggle)
    const headerThemeBtn = document.getElementById('headerThemeBtn');
    if (headerThemeBtn) {
        headerThemeBtn.addEventListener('click', () => {
            settings.darkMode = !settings.darkMode;
            saveSettings();
            applyTheme();
            updateHeaderThemeIcon();
        });
    }
    
    // Sound toggle
    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
        soundToggle.checked = settings.soundEnabled;
        soundToggle.addEventListener('change', (e) => {
            settings.soundEnabled = e.target.checked;
            saveSettings();
        });
    }
    
    // Rest timer default
    const defaultRestSelect = document.getElementById('defaultRest');
    if (defaultRestSelect) {
        defaultRestSelect.value = settings.defaultRestTime;
        defaultRestSelect.addEventListener('change', (e) => {
            settings.defaultRestTime = parseInt(e.target.value);
            selectedRestTime = settings.defaultRestTime;
            saveSettings();
        });
    }
    
    // Weekly goal setting
    const weeklyGoalSelect = document.getElementById('weeklyGoal');
    if (weeklyGoalSelect) {
        weeklyGoalSelect.value = settings.weeklyGoal;
        weeklyGoalSelect.addEventListener('change', (e) => {
            settings.weeklyGoal = parseInt(e.target.value);
            saveSettings();
            renderGoalProgress();
        });
    }
    
    // Clear data
    const clearDataBtn = document.getElementById('clearData');
    if (clearDataBtn) {
        clearDataBtn.addEventListener('click', clearAllData);
    }
    
    // Export data buttons (header and settings)
    const exportDataBtn = document.getElementById('exportData');
    const exportAllDataBtn = document.getElementById('exportAllData');
    const importDataBtn = document.getElementById('importData');
    
    if (exportDataBtn) exportDataBtn.addEventListener('click', exportData);
    if (exportAllDataBtn) exportAllDataBtn.addEventListener('click', exportData);
    if (importDataBtn) importDataBtn.addEventListener('click', importData);
    
    // Rest timer modal
    const restTimerModal = document.getElementById('restTimerModal');
    const closeRestTimer = document.getElementById('closeRestTimer');
    if (closeRestTimer) {
        closeRestTimer.addEventListener('click', () => {
            restTimerModal.classList.add('hidden');
            stopRestTimer();
        });
    }
    
    // PR modal
    const prModal = document.getElementById('prModal');
    const closePrModal = document.getElementById('closePrModal');
    if (closePrModal) {
        closePrModal.addEventListener('click', () => {
            prModal.classList.add('hidden');
        });
    }
    
    // Notes modal
    const closeNotesBtn = document.getElementById('closeNotesModal');
    const saveNoteBtn = document.getElementById('saveNoteBtn');
    if (closeNotesBtn) closeNotesBtn.addEventListener('click', closeNotesModal);
    if (saveNoteBtn) saveNoteBtn.addEventListener('click', saveNote);
    
    // Alternatives modal
    const closeAlternativesBtn = document.getElementById('closeAlternativesModal');
    if (closeAlternativesBtn) closeAlternativesBtn.addEventListener('click', closeAlternativesModal);
    
    // Achievement modal
    const closeAchievementBtn = document.getElementById('closeAchievementModal');
    if (closeAchievementBtn) {
        closeAchievementBtn.addEventListener('click', () => {
            document.getElementById('achievementModal')?.classList.add('hidden');
        });
    }
    
    // Custom workout modal
    const createCustomBtn = document.getElementById('createCustomWorkout');
    const closeCustomBtn = document.getElementById('closeCustomWorkoutModal');
    const saveCustomBtn = document.getElementById('saveCustomWorkout');
    
    if (createCustomBtn) createCustomBtn.addEventListener('click', openCustomWorkoutModal);
    if (closeCustomBtn) closeCustomBtn.addEventListener('click', closeCustomWorkoutModal);
    if (saveCustomBtn) saveCustomBtn.addEventListener('click', saveCustomWorkout);
    
    // Rest time buttons
    document.querySelectorAll('.rest-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.rest-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedRestTime = parseInt(btn.dataset.time);
            restTimerSeconds = selectedRestTime;
            updateRestTimerDisplay();
        });
    });
    
    // Rest timer controls
    const startRestBtn = document.getElementById('startRestTimer');
    const resetRestBtn = document.getElementById('resetRestTimer');
    const skipRestBtn = document.getElementById('skipRestTimer');
    
    if (startRestBtn) startRestBtn.addEventListener('click', toggleRestTimer);
    if (resetRestBtn) resetRestBtn.addEventListener('click', resetRestTimer);
    if (skipRestBtn) skipRestBtn.addEventListener('click', skipRestTimer);
    
    // Online/Offline
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
}

// ===== TAB SWITCHING =====
function switchTab(tabId) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === tabId);
    });
}

// ===== WARM-UP FUNCTIONS =====
function loadWarmup(type) {
    currentStretches = stretchDatabase[type].map((stretch, index) => ({
        ...stretch,
        id: index,
        completed: false
    }));
    completedStretches = [];
    currentStretchIndex = 0;
    renderStretchList();
}

function renderStretchList() {
    const stretchListEl = document.getElementById('stretchList');
    if (!stretchListEl) return;
    
    stretchListEl.innerHTML = currentStretches.map((stretch, index) => `
        <div class="stretch-card ${stretch.completed ? 'completed' : ''} ${index === currentStretchIndex && !stretch.completed ? 'active' : ''}" data-id="${stretch.id}">
            <div class="stretch-icon">${stretch.icon}</div>
            <div class="stretch-info">
                <div class="stretch-name">${stretch.completed ? '✓ ' : ''}${stretch.name}</div>
                <div class="stretch-details">${stretch.description} • ${stretch.target}</div>
            </div>
            <div class="stretch-duration">${stretch.duration}s</div>
            <button class="stretch-check ${stretch.completed ? 'done' : ''}" onclick="toggleStretch(${stretch.id})">
                ${stretch.completed ? '✓' : '○'}
            </button>
        </div>
    `).join('');
}

function toggleStretch(id) {
    const stretch = currentStretches.find(s => s.id === id);
    if (stretch) {
        stretch.completed = !stretch.completed;
        if (stretch.completed) {
            completedStretches.push(stretch);
            const nextIncomplete = currentStretches.findIndex(s => !s.completed);
            if (nextIncomplete !== -1) currentStretchIndex = nextIncomplete;
        } else {
            completedStretches = completedStretches.filter(s => s.id !== id);
        }
        renderStretchList();
    }
}
window.toggleStretch = toggleStretch;

function startTimer() {
    if (timerRunning) return;
    timerRunning = true;
    document.getElementById('startTimer')?.classList.add('hidden');
    document.getElementById('pauseTimer')?.classList.remove('hidden');
    
    timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('startTimer')?.classList.remove('hidden');
    document.getElementById('pauseTimer')?.classList.add('hidden');
}

function resetTimer() {
    pauseTimer();
    timerSeconds = 0;
    updateTimerDisplay();
    const warmupType = document.getElementById('warmupType');
    if (warmupType) loadWarmup(warmupType.value);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const timerMinutesEl = document.getElementById('timerMinutes');
    const timerSecondsEl = document.getElementById('timerSeconds');
    if (timerMinutesEl) timerMinutesEl.textContent = minutes.toString().padStart(2, '0');
    if (timerSecondsEl) timerSecondsEl.textContent = seconds.toString().padStart(2, '0');
}

function completeWarmup() {
    currentStretches.forEach(s => {
        if (!s.completed) {
            s.completed = true;
            completedStretches.push(s);
        }
    });
    pauseTimer();
    renderStretchList();
    
    const warmupType = document.getElementById('warmupType');
    const warmupData = {
        date: new Date().toISOString(),
        type: warmupType?.options[warmupType.selectedIndex]?.text || 'Warm-up',
        duration: timerSeconds,
        stretches: completedStretches.length
    };
    
    const warmupHistory = JSON.parse(localStorage.getItem('warmupHistory') || '[]');
    warmupHistory.unshift(warmupData);
    localStorage.setItem('warmupHistory', JSON.stringify(warmupHistory.slice(0, 50)));
    
    const stats = JSON.parse(localStorage.getItem('workoutStats') || '{"total": 0, "exercises": 0, "warmups": 0}');
    stats.warmups = (stats.warmups || 0) + 1;
    localStorage.setItem('workoutStats', JSON.stringify(stats));
    
    updateStats();
    playSound('complete');
    alert('🔥 Great warm-up! You\'re ready for your workout!');
    switchTab('workouts');
    setTimeout(resetTimer, 500);
}

// ===== WORKOUT FUNCTIONS =====
function loadWorkout(type) {
    let exercises;
    
    // Check if it's a custom workout
    if (type.startsWith('custom_')) {
        const customId = parseInt(type.replace('custom_', ''));
        const customWorkout = customWorkouts.find(w => w.id === customId);
        if (customWorkout) {
            exercises = customWorkout.exercises;
        } else {
            exercises = exerciseDatabase.push; // Fallback
        }
    } else {
        exercises = exerciseDatabase[type] || exerciseDatabase.push;
    }
    
    currentWorkout = exercises.map((ex, index) => ({
        ...ex,
        id: index,
        completed: false,
        weight: '',
        actualReps: ''
    }));
    renderExerciseList();
}

function renderExerciseList() {
    const exerciseListEl = document.getElementById('exerciseList');
    if (!exerciseListEl) return;
    
    exerciseListEl.innerHTML = currentWorkout.map(exercise => {
        const note = exerciseNotes[exercise.name] || '';
        const pr = personalRecords[exercise.name];
        const hasAlternatives = exerciseAlternatives[exercise.name]?.length > 0;
        
        return `
            <div class="exercise-card ${exercise.completed ? 'completed' : ''}" data-id="${exercise.id}">
                <div class="exercise-header">
                    <div class="exercise-name">
                        ${exercise.completed ? '✅' : '🏋️'} ${exercise.name}
                    </div>
                    <div class="exercise-actions">
                        ${hasAlternatives ? `<button class="exercise-action-btn" onclick="openAlternativesModal('${exercise.name}', ${exercise.id})" title="Alternatives">🔄</button>` : ''}
                        <button class="exercise-action-btn" onclick="openNotesModal('${exercise.name}')" title="Add Notes">📝</button>
                        <a href="${exercise.video}" target="_blank" class="video-btn" title="Watch Tutorial">
                            ▶️ Video
                        </a>
                    </div>
                </div>
                <div class="exercise-details">
                    <span>${exercise.sets} sets</span>
                    <span>${exercise.reps} reps</span>
                    <span class="muscle-tag">${exercise.muscle}</span>
                </div>
                <div class="exercise-equipment">🔧 ${exercise.equipment}</div>
                ${pr ? `<div class="exercise-pr">🏆 PR: ${pr.weight}kg × ${pr.reps}</div>` : ''}
                ${note ? `<div class="exercise-notes-preview">📝 ${note}</div>` : ''}
                ${workoutInProgress && !exercise.completed ? `
                    <div class="exercise-input">
                        <input type="number" placeholder="Weight (kg)" class="weight-input" data-id="${exercise.id}">
                        <input type="number" placeholder="Reps done" class="reps-input" data-id="${exercise.id}">
                        <button class="complete-btn" onclick="completeExercise(${exercise.id})">Done</button>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function startWorkout() {
    workoutInProgress = true;
    workoutStartTime = Date.now();
    completedExercises = [];
    
    document.getElementById('startWorkout')?.classList.add('hidden');
    document.getElementById('finishWorkout')?.classList.remove('hidden');
    
    const workoutTypeSelect = document.getElementById('workoutType');
    if (workoutTypeSelect) workoutTypeSelect.disabled = true;
    
    // Show workout duration
    const durationEl = document.getElementById('workoutDuration');
    if (durationEl) durationEl.classList.remove('hidden');
    updateWorkoutDuration();
    
    playSound('start');
    renderExerciseList();
}

function updateWorkoutDuration() {
    if (!workoutInProgress) return;
    
    const elapsed = Math.floor((Date.now() - workoutStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    const durationTimeEl = document.getElementById('durationTime');
    if (durationTimeEl) {
        durationTimeEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    setTimeout(updateWorkoutDuration, 1000);
}

function completeExercise(id) {
    const weightInput = document.querySelector(`.weight-input[data-id="${id}"]`);
    const repsInput = document.querySelector(`.reps-input[data-id="${id}"]`);
    
    const exercise = currentWorkout.find(ex => ex.id === id);
    if (exercise) {
        exercise.completed = true;
        exercise.weight = parseFloat(weightInput?.value) || 0;
        exercise.actualReps = parseInt(repsInput?.value) || parseInt(exercise.reps) || 0;
        completedExercises.push(exercise);
        
        // Check for Personal Record
        checkAndUpdatePR(exercise);
        
        playSound('complete');
    }
    
    renderExerciseList();
    
    // Show rest timer
    showRestTimer();
}
window.completeExercise = completeExercise;

// ===== PERSONAL RECORDS =====
function checkAndUpdatePR(exercise) {
    const exerciseName = exercise.name;
    const weight = exercise.weight;
    const reps = exercise.actualReps;
    
    if (weight <= 0) return; // No weight recorded
    
    const currentPR = personalRecords[exerciseName];
    let isNewPR = false;
    
    if (!currentPR) {
        // First record for this exercise
        personalRecords[exerciseName] = { weight, reps, date: new Date().toISOString() };
        isNewPR = true;
    } else if (weight > currentPR.weight) {
        // New weight PR
        personalRecords[exerciseName] = { weight, reps, date: new Date().toISOString() };
        isNewPR = true;
    } else if (weight === currentPR.weight && reps > currentPR.reps) {
        // Same weight but more reps
        personalRecords[exerciseName] = { weight, reps, date: new Date().toISOString() };
        isNewPR = true;
    }
    
    if (isNewPR) {
        savePRs();
        showPRCelebration(exerciseName, weight, reps);
        renderPersonalRecords();
    }
}

function savePRs() {
    localStorage.setItem('personalRecords', JSON.stringify(personalRecords));
}

function showPRCelebration(exerciseName, weight, reps) {
    const modal = document.getElementById('prModal');
    if (!modal) return;
    
    const prExerciseName = document.getElementById('prExerciseName');
    const prDetails = document.getElementById('prDetails');
    
    if (prExerciseName) prExerciseName.textContent = exerciseName;
    if (prDetails) prDetails.textContent = `${weight}kg × ${reps} reps`;
    
    modal.classList.remove('hidden');
    playSound('success');
    
    // Auto-close after 3 seconds
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 3000);
}

function renderPersonalRecords() {
    const prListEl = document.getElementById('prList');
    if (!prListEl) return;
    
    const prEntries = Object.entries(personalRecords);
    
    if (prEntries.length === 0) {
        prListEl.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 1rem;">No PRs yet. Complete exercises with weights to track your progress!</p>';
        return;
    }
    
    // Sort by most recent
    prEntries.sort((a, b) => new Date(b[1].date) - new Date(a[1].date));
    
    prListEl.innerHTML = prEntries.slice(0, 10).map(([name, pr]) => `
        <div class="pr-item">
            <span class="pr-exercise">${name}</span>
            <span class="pr-value">🏆 ${pr.weight}kg × ${pr.reps}</span>
        </div>
    `).join('');
}

// ===== WEEKLY PLANNER =====
function renderWeeklyPlanner() {
    const plannerEl = document.getElementById('plannerWeek');
    if (!plannerEl) return;
    
    const days = [
        { key: 'mon', name: 'Mon' },
        { key: 'tue', name: 'Tue' },
        { key: 'wed', name: 'Wed' },
        { key: 'thu', name: 'Thu' },
        { key: 'fri', name: 'Fri' },
        { key: 'sat', name: 'Sat' },
        { key: 'sun', name: 'Sun' }
    ];
    
    const today = new Date().getDay(); // 0 = Sunday
    const todayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][today];
    
    // Check workout history for this week
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    const weekStart = getWeekStart(new Date());
    const completedDays = getCompletedDaysThisWeek(history, weekStart);
    
    plannerEl.innerHTML = days.map(day => {
        const isToday = day.key === todayKey;
        const isCompleted = completedDays.includes(day.key);
        const plannedWorkout = weeklyPlan[day.key];
        
        return `
            <div class="planner-day ${isToday ? 'today' : ''}">
                <span class="day-name">${day.name}</span>
                <div class="day-workout">
                    <select onchange="updatePlan('${day.key}', this.value)">
                        <option value="rest" ${plannedWorkout === 'rest' ? 'selected' : ''}>🛋️ Rest Day</option>
                        <option value="push" ${plannedWorkout === 'push' ? 'selected' : ''}>💪 Push</option>
                        <option value="pull" ${plannedWorkout === 'pull' ? 'selected' : ''}>🔙 Pull</option>
                        <option value="legs" ${plannedWorkout === 'legs' ? 'selected' : ''}>🦵 Legs</option>
                        <option value="upper" ${plannedWorkout === 'upper' ? 'selected' : ''}>⬆️ Upper Body</option>
                        <option value="lower" ${plannedWorkout === 'lower' ? 'selected' : ''}>⬇️ Lower Body</option>
                        <option value="fullbody" ${plannedWorkout === 'fullbody' ? 'selected' : ''}>🏋️ Full Body</option>
                    </select>
                </div>
                <span class="day-status">${isCompleted ? '✅' : (plannedWorkout === 'rest' ? '😴' : '⏳')}</span>
            </div>
        `;
    }).join('');
    
    updatePlannerTips();
}

function updatePlan(day, workout) {
    weeklyPlan[day] = workout;
    localStorage.setItem('weeklyPlan', JSON.stringify(weeklyPlan));
    renderWeeklyPlanner();
}
window.updatePlan = updatePlan;

function getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday as start
    return new Date(d.setDate(diff));
}

function getCompletedDaysThisWeek(history, weekStart) {
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);
    
    const completedDays = [];
    const dayMap = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    
    history.forEach(workout => {
        const workoutDate = new Date(workout.date);
        if (workoutDate >= weekStart && workoutDate < weekEnd) {
            const dayKey = dayMap[workoutDate.getDay()];
            if (!completedDays.includes(dayKey)) {
                completedDays.push(dayKey);
            }
        }
    });
    
    return completedDays;
}

function updatePlannerTips() {
    const tipsEl = document.getElementById('plannerTips');
    if (!tipsEl) return;
    
    const plannedWorkouts = Object.values(weeklyPlan).filter(w => w !== 'rest').length;
    const restDays = 7 - plannedWorkouts;
    
    let tipText = '';
    
    if (plannedWorkouts === 0) {
        tipText = 'Plan your week! Aim for 3-5 workout days with adequate rest.';
    } else if (plannedWorkouts < 3) {
        tipText = `You have ${plannedWorkouts} workout(s) planned. Consider adding more for better progress!`;
    } else if (plannedWorkouts > 6) {
        tipText = '⚠️ You have very few rest days. Rest is crucial for muscle recovery!';
    } else if (restDays < 2) {
        tipText = '💡 Consider adding another rest day for optimal recovery.';
    } else {
        tipText = `✅ Great plan! ${plannedWorkouts} workouts with ${restDays} rest days.`;
    }
    
    tipsEl.innerHTML = `<p>${tipText}</p>`;
}

// ===== EXERCISE NOTES =====
let currentNoteExercise = '';

function openNotesModal(exerciseName) {
    currentNoteExercise = exerciseName;
    const modal = document.getElementById('notesModal');
    const titleEl = document.getElementById('notesExerciseName');
    const textareaEl = document.getElementById('notesTextarea');
    
    if (!modal) return;
    
    if (titleEl) titleEl.textContent = exerciseName;
    if (textareaEl) textareaEl.value = exerciseNotes[exerciseName] || '';
    
    modal.classList.remove('hidden');
}
window.openNotesModal = openNotesModal;

function saveNote() {
    const textareaEl = document.getElementById('notesTextarea');
    if (!textareaEl || !currentNoteExercise) return;
    
    const note = textareaEl.value.trim();
    
    if (note) {
        exerciseNotes[currentNoteExercise] = note;
    } else {
        delete exerciseNotes[currentNoteExercise];
    }
    
    localStorage.setItem('exerciseNotes', JSON.stringify(exerciseNotes));
    
    closeNotesModal();
    renderExerciseList();
}
window.saveNote = saveNote;

function closeNotesModal() {
    const modal = document.getElementById('notesModal');
    if (modal) modal.classList.add('hidden');
    currentNoteExercise = '';
}
window.closeNotesModal = closeNotesModal;

// ===== EXERCISE ALTERNATIVES =====
let currentAlternativeExerciseId = null;

function openAlternativesModal(exerciseName, exerciseId) {
    currentAlternativeExerciseId = exerciseId;
    const modal = document.getElementById('alternativesModal');
    const titleEl = document.getElementById('alternativesExerciseName');
    const listEl = document.getElementById('alternativesList');
    
    if (!modal) return;
    
    const alternatives = exerciseAlternatives[exerciseName] || [];
    
    if (titleEl) titleEl.textContent = exerciseName;
    
    if (listEl) {
        if (alternatives.length === 0) {
            listEl.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">No alternatives available for this exercise.</p>';
        } else {
            listEl.innerHTML = alternatives.map(alt => `
                <div class="alternative-item" onclick="swapExercise('${alt}')">
                    <span>${alt}</span>
                    <span>→</span>
                </div>
            `).join('');
        }
    }
    
    modal.classList.remove('hidden');
}
window.openAlternativesModal = openAlternativesModal;

function swapExercise(newExerciseName) {
    if (currentAlternativeExerciseId === null) return;
    
    const exercise = currentWorkout.find(ex => ex.id === currentAlternativeExerciseId);
    if (exercise) {
        // Find the new exercise in allExercises to get video link
        const newExerciseData = allExercises.find(e => e.name === newExerciseName);
        
        exercise.name = newExerciseName;
        if (newExerciseData) {
            exercise.video = newExerciseData.video || exercise.video;
            exercise.equipment = newExerciseData.equipment || exercise.equipment;
        }
    }
    
    closeAlternativesModal();
    renderExerciseList();
    
    playSound('complete');
}
window.swapExercise = swapExercise;

function closeAlternativesModal() {
    const modal = document.getElementById('alternativesModal');
    if (modal) modal.classList.add('hidden');
    currentAlternativeExerciseId = null;
}
window.closeAlternativesModal = closeAlternativesModal;

// ===== CUSTOM WORKOUTS =====
let selectedCustomExercises = [];

function openCustomWorkoutModal() {
    const modal = document.getElementById('customWorkoutModal');
    if (!modal) return;
    
    selectedCustomExercises = [];
    document.getElementById('customWorkoutName').value = '';
    renderCustomExerciseSelector();
    renderSelectedExercises();
    
    modal.classList.remove('hidden');
}
window.openCustomWorkoutModal = openCustomWorkoutModal;

function renderCustomExerciseSelector() {
    const listEl = document.getElementById('customExerciseList');
    if (!listEl) return;
    
    listEl.innerHTML = allExercises.map((ex, index) => `
        <div class="custom-exercise-item">
            <input type="checkbox" id="custom-ex-${index}" onchange="toggleCustomExercise(${index})" 
                ${selectedCustomExercises.includes(index) ? 'checked' : ''}>
            <label for="custom-ex-${index}">${ex.name} <small>(${ex.muscle})</small></label>
        </div>
    `).join('');
}

function toggleCustomExercise(index) {
    if (selectedCustomExercises.includes(index)) {
        selectedCustomExercises = selectedCustomExercises.filter(i => i !== index);
    } else {
        selectedCustomExercises.push(index);
    }
    renderSelectedExercises();
}
window.toggleCustomExercise = toggleCustomExercise;

function renderSelectedExercises() {
    const container = document.getElementById('selectedExercises');
    if (!container) return;
    
    if (selectedCustomExercises.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">No exercises selected</p>';
        return;
    }
    
    container.innerHTML = selectedCustomExercises.map(index => {
        const ex = allExercises[index];
        return `<span class="selected-exercise-tag">${ex.name}</span>`;
    }).join('');
}

function saveCustomWorkout() {
    const nameInput = document.getElementById('customWorkoutName');
    const name = nameInput?.value.trim();
    
    if (!name) {
        alert('Please enter a workout name');
        return;
    }
    
    if (selectedCustomExercises.length === 0) {
        alert('Please select at least one exercise');
        return;
    }
    
    const exercises = selectedCustomExercises.map(index => {
        const ex = allExercises[index];
        return {
            name: ex.name,
            sets: 3,
            reps: '10-12',
            muscle: ex.muscle,
            equipment: ex.equipment,
            video: ex.video
        };
    });
    
    const customWorkout = {
        id: Date.now(),
        name: name,
        exercises: exercises
    };
    
    customWorkouts.push(customWorkout);
    localStorage.setItem('customWorkouts', JSON.stringify(customWorkouts));
    
    closeCustomWorkoutModal();
    renderCustomWorkouts();
    updateWorkoutSelector();
    
    playSound('complete');
    alert(`Custom workout "${name}" created with ${exercises.length} exercises!`);
}
window.saveCustomWorkout = saveCustomWorkout;

function closeCustomWorkoutModal() {
    const modal = document.getElementById('customWorkoutModal');
    if (modal) modal.classList.add('hidden');
    selectedCustomExercises = [];
}
window.closeCustomWorkoutModal = closeCustomWorkoutModal;

function renderCustomWorkouts() {
    const container = document.getElementById('customWorkoutsList');
    if (!container) return;
    
    if (customWorkouts.length === 0) {
        container.innerHTML = '';
        return;
    }
    
    container.innerHTML = '<h4 style="margin-bottom: 0.5rem;">Your Custom Workouts</h4>' +
        customWorkouts.map(workout => `
            <div class="custom-workout-item">
                <span>${workout.name} (${workout.exercises.length} exercises)</span>
                <button class="exercise-action-btn" onclick="deleteCustomWorkout(${workout.id})" title="Delete">🗑️</button>
            </div>
        `).join('');
}

function deleteCustomWorkout(id) {
    if (!confirm('Delete this custom workout?')) return;
    
    customWorkouts = customWorkouts.filter(w => w.id !== id);
    localStorage.setItem('customWorkouts', JSON.stringify(customWorkouts));
    renderCustomWorkouts();
    updateWorkoutSelector();
}
window.deleteCustomWorkout = deleteCustomWorkout;

function updateWorkoutSelector() {
    const selector = document.getElementById('workoutType');
    if (!selector) return;
    
    // Remove old custom options
    Array.from(selector.options).forEach(opt => {
        if (opt.value.startsWith('custom_')) {
            opt.remove();
        }
    });
    
    // Add custom workouts
    customWorkouts.forEach(workout => {
        const option = document.createElement('option');
        option.value = `custom_${workout.id}`;
        option.textContent = `⭐ ${workout.name}`;
        selector.appendChild(option);
    });
}

function finishWorkout() {
    const workoutDuration = workoutStartTime ? Math.floor((Date.now() - workoutStartTime) / 1000) : 0;
    
    const workoutType = document.getElementById('workoutType');
    const workoutData = {
        date: new Date().toISOString(),
        type: workoutType?.options[workoutType.selectedIndex]?.text || 'Workout',
        exercises: completedExercises.length,
        duration: workoutDuration,
        details: completedExercises
    };
    
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    history.unshift(workoutData);
    localStorage.setItem('workoutHistory', JSON.stringify(history));
    
    const stats = JSON.parse(localStorage.getItem('workoutStats') || '{"total": 0, "exercises": 0}');
    stats.total += 1;
    stats.exercises += completedExercises.length;
    stats.lastWorkout = new Date().toISOString();
    localStorage.setItem('workoutStats', JSON.stringify(stats));
    
    // Reset
    workoutInProgress = false;
    workoutStartTime = null;
    completedExercises = [];
    
    document.getElementById('startWorkout')?.classList.remove('hidden');
    document.getElementById('finishWorkout')?.classList.add('hidden');
    document.getElementById('workoutDuration')?.classList.add('hidden');
    
    const workoutTypeSelect = document.getElementById('workoutType');
    if (workoutTypeSelect) workoutTypeSelect.disabled = false;
    
    loadWorkout(workoutTypeSelect?.value || 'push');
    updateStats();
    renderWorkoutHistory();
    renderPersonalRecords();
    renderProgressChart();
    renderMuscleRecovery();
    renderAchievements();
    renderGoalProgress();
    
    playSound('success');
    alert(`🎉 Great workout!\n\nDuration: ${Math.floor(workoutDuration / 60)} minutes\nExercises: ${workoutData.exercises}`);
}

// ===== REST TIMER =====
function showRestTimer() {
    const modal = document.getElementById('restTimerModal');
    if (!modal) return;
    
    modal.classList.remove('hidden');
    restTimerSeconds = selectedRestTime;
    updateRestTimerDisplay();
}

function toggleRestTimer() {
    if (restTimerRunning) {
        pauseRestTimer();
    } else {
        startRestTimer();
    }
}

function startRestTimer() {
    restTimerRunning = true;
    const startBtn = document.getElementById('startRestTimer');
    if (startBtn) startBtn.textContent = '⏸️ Pause';
    
    restTimerInterval = setInterval(() => {
        restTimerSeconds--;
        updateRestTimerDisplay();
        
        // Warning sound at 10 seconds
        if (restTimerSeconds === 10) {
            playSound('warning');
        }
        
        // Tick sound for last 3 seconds
        if (restTimerSeconds <= 3 && restTimerSeconds > 0) {
            playSound('tick');
        }
        
        if (restTimerSeconds <= 0) {
            stopRestTimer();
            playSound('alarm');
            document.getElementById('restTimerModal')?.classList.add('hidden');
        }
    }, 1000);
}

function pauseRestTimer() {
    restTimerRunning = false;
    clearInterval(restTimerInterval);
    const startBtn = document.getElementById('startRestTimer');
    if (startBtn) startBtn.textContent = '▶️ Start';
}

function stopRestTimer() {
    pauseRestTimer();
    restTimerSeconds = selectedRestTime;
    updateRestTimerDisplay();
}

function resetRestTimer() {
    pauseRestTimer();
    restTimerSeconds = selectedRestTime;
    updateRestTimerDisplay();
}

function skipRestTimer() {
    stopRestTimer();
    document.getElementById('restTimerModal')?.classList.add('hidden');
}

function updateRestTimerDisplay() {
    const display = document.getElementById('restTimerDisplay');
    if (display) {
        const minutes = Math.floor(restTimerSeconds / 60);
        const seconds = restTimerSeconds % 60;
        display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

// ===== EXERCISE LIBRARY =====
function renderExerciseLibrary(exercises = allExercises) {
    const libraryEl = document.getElementById('exerciseLibrary');
    if (!libraryEl) return;
    
    libraryEl.innerHTML = exercises.map(exercise => `
        <div class="library-card">
            <div class="library-info">
                <h4>${exercise.name}</h4>
                <span class="library-desc">${exercise.description}</span>
                <span class="library-equipment">🔧 ${exercise.equipment}</span>
            </div>
            <div class="library-actions">
                <a href="${exercise.video}" target="_blank" class="video-btn-small" title="Watch Tutorial">▶️</a>
                <span class="muscle-tag">${exercise.muscle}</span>
            </div>
        </div>
    `).join('');
}

function getActiveFilter() {
    const activeChip = document.querySelector('.chip.active');
    return activeChip ? activeChip.dataset.filter : 'all';
}

function filterExercises(searchTerm, muscleFilter) {
    let filtered = allExercises;
    
    if (muscleFilter && muscleFilter !== 'all') {
        filtered = filtered.filter(ex => ex.muscle === muscleFilter);
    }
    
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(ex => 
            ex.name.toLowerCase().includes(term) ||
            ex.muscle.toLowerCase().includes(term) ||
            ex.description.toLowerCase().includes(term) ||
            ex.equipment.toLowerCase().includes(term)
        );
    }
    
    renderExerciseLibrary(filtered);
}

// ===== STATS =====
function updateStats() {
    const stats = JSON.parse(localStorage.getItem('workoutStats') || '{"total": 0, "exercises": 0, "warmups": 0}');
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    
    const totalWorkoutsEl = document.getElementById('totalWorkouts');
    const totalWarmupsEl = document.getElementById('totalWarmups');
    const totalExercisesEl = document.getElementById('totalExercises');
    const thisWeekEl = document.getElementById('thisWeek');
    const streakEl = document.getElementById('streak');
    
    if (totalWorkoutsEl) totalWorkoutsEl.textContent = stats.total;
    if (totalWarmupsEl) totalWarmupsEl.textContent = stats.warmups || 0;
    if (totalExercisesEl) totalExercisesEl.textContent = stats.exercises;
    
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const thisWeek = history.filter(w => new Date(w.date) > weekAgo).length;
    if (thisWeekEl) thisWeekEl.textContent = thisWeek;
    
    const streak = calculateStreak(history);
    if (streakEl) streakEl.textContent = streak;
}

// ===== PROGRESS CHART =====
function renderProgressChart() {
    const chartContainer = document.getElementById('weeklyChart');
    if (!chartContainer) return;
    
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    
    // Get last 7 days
    const days = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        date.setHours(0, 0, 0, 0);
        
        const dayStart = date.getTime();
        const dayEnd = dayStart + 24 * 60 * 60 * 1000;
        
        // Count workouts on this day
        const workoutsOnDay = history.filter(w => {
            const workoutTime = new Date(w.date).getTime();
            return workoutTime >= dayStart && workoutTime < dayEnd;
        });
        
        // Sum exercises
        const totalExercises = workoutsOnDay.reduce((sum, w) => sum + (w.exercises || 0), 0);
        
        days.push({
            name: dayNames[date.getDay()],
            count: totalExercises,
            isToday: i === 0
        });
    }
    
    // Find max for scaling
    const maxCount = Math.max(...days.map(d => d.count), 1);
    
    chartContainer.innerHTML = days.map(day => {
        const height = day.count > 0 ? Math.max((day.count / maxCount) * 100, 15) : 10;
        return `
            <div class="chart-bar ${day.isToday ? 'active' : ''}" style="height: ${height}%" title="${day.count} exercises">
                <span class="chart-bar-label">${day.name}</span>
            </div>
        `;
    }).join('');
}

// ===== MUSCLE RECOVERY =====
function renderMuscleRecovery() {
    const recoveryGrid = document.getElementById('recoveryGrid');
    if (!recoveryGrid) return;
    
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    const now = new Date();
    
    // Muscle groups and their recovery times (in hours)
    const muscleGroups = {
        chest: { name: 'Chest', recovery: 48 },
        back: { name: 'Back', recovery: 48 },
        shoulders: { name: 'Shoulders', recovery: 48 },
        biceps: { name: 'Biceps', recovery: 36 },
        triceps: { name: 'Triceps', recovery: 36 },
        quads: { name: 'Quads', recovery: 72 },
        hamstrings: { name: 'Hamstrings', recovery: 72 },
        calves: { name: 'Calves', recovery: 48 },
        core: { name: 'Core', recovery: 24 }
    };
    
    // Map workout types to muscles
    const workoutMuscles = {
        'Push': ['chest', 'shoulders', 'triceps'],
        'Pull': ['back', 'biceps'],
        'Legs': ['quads', 'hamstrings', 'calves'],
        'Upper Body': ['chest', 'back', 'shoulders', 'biceps', 'triceps'],
        'Lower Body': ['quads', 'hamstrings', 'calves'],
        'Full Body': ['chest', 'back', 'shoulders', 'quads', 'hamstrings', 'core']
    };
    
    // Track last workout for each muscle
    const lastWorked = {};
    
    history.forEach(workout => {
        const workoutDate = new Date(workout.date);
        const muscles = workoutMuscles[workout.type] || [];
        
        // Also check individual exercises
        if (workout.details) {
            workout.details.forEach(ex => {
                const muscle = ex.muscle?.toLowerCase();
                if (muscle && muscleGroups[muscle]) {
                    if (!lastWorked[muscle] || workoutDate > lastWorked[muscle]) {
                        lastWorked[muscle] = workoutDate;
                    }
                }
            });
        }
        
        muscles.forEach(muscle => {
            if (!lastWorked[muscle] || workoutDate > lastWorked[muscle]) {
                lastWorked[muscle] = workoutDate;
            }
        });
    });
    
    // Calculate recovery status
    const recoveryStatus = Object.entries(muscleGroups).map(([key, data]) => {
        const lastWorkout = lastWorked[key];
        
        if (!lastWorkout) {
            return { name: data.name, status: 'fresh', label: 'Ready' };
        }
        
        const hoursSince = (now - lastWorkout) / (1000 * 60 * 60);
        const recoveryPercent = (hoursSince / data.recovery) * 100;
        
        if (recoveryPercent >= 100) {
            return { name: data.name, status: 'fresh', label: 'Ready' };
        } else if (recoveryPercent >= 50) {
            return { name: data.name, status: 'recovering', label: 'Recovering' };
        } else {
            return { name: data.name, status: 'tired', label: 'Rest' };
        }
    });
    
    recoveryGrid.innerHTML = recoveryStatus.map(muscle => `
        <span class="recovery-item ${muscle.status}" title="${muscle.label}">
            ${muscle.name}
        </span>
    `).join('');
}

// ===== ACHIEVEMENTS =====
const achievements = [
    { id: 'first_workout', icon: '🎯', name: 'First Steps', description: 'Complete your first workout', check: (stats) => stats.total >= 1 },
    { id: 'week_warrior', icon: '🔥', name: 'Week Warrior', description: 'Complete 7 workouts', check: (stats) => stats.total >= 7 },
    { id: 'month_master', icon: '💪', name: 'Month Master', description: 'Complete 30 workouts', check: (stats) => stats.total >= 30 },
    { id: 'century', icon: '💯', name: 'Century Club', description: 'Complete 100 workouts', check: (stats) => stats.total >= 100 },
    { id: 'exercise_50', icon: '🏋️', name: 'Getting Strong', description: 'Complete 50 exercises', check: (stats) => stats.exercises >= 50 },
    { id: 'exercise_200', icon: '🦾', name: 'Iron Will', description: 'Complete 200 exercises', check: (stats) => stats.exercises >= 200 },
    { id: 'warmup_10', icon: '🧘', name: 'Warm & Ready', description: 'Complete 10 warm-ups', check: (stats) => (stats.warmups || 0) >= 10 },
    { id: 'streak_3', icon: '⚡', name: 'On Fire', description: '3-day workout streak', check: (stats, streak) => streak >= 3 },
    { id: 'streak_7', icon: '🌟', name: 'Unstoppable', description: '7-day workout streak', check: (stats, streak) => streak >= 7 },
    { id: 'pr_hunter', icon: '🏆', name: 'PR Hunter', description: 'Set 5 personal records', check: (stats, streak, prs) => Object.keys(prs).length >= 5 },
    { id: 'pr_master', icon: '👑', name: 'Record Breaker', description: 'Set 15 personal records', check: (stats, streak, prs) => Object.keys(prs).length >= 15 },
    { id: 'early_bird', icon: '🌅', name: 'Early Bird', description: 'Workout before 7 AM', check: (stats, streak, prs, history) => history.some(w => new Date(w.date).getHours() < 7) }
];

let unlockedAchievements = [];

function renderAchievements() {
    const badgesGrid = document.getElementById('badgesGrid');
    if (!badgesGrid) return;
    
    const stats = JSON.parse(localStorage.getItem('workoutStats') || '{"total": 0, "exercises": 0, "warmups": 0}');
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    const streak = calculateStreak(history);
    const savedUnlocked = JSON.parse(localStorage.getItem('unlockedAchievements') || '[]');
    
    const newlyUnlocked = [];
    
    badgesGrid.innerHTML = achievements.map(achievement => {
        const isUnlocked = achievement.check(stats, streak, personalRecords, history);
        
        // Check for newly unlocked achievements
        if (isUnlocked && !savedUnlocked.includes(achievement.id)) {
            newlyUnlocked.push(achievement);
        }
        
        return `
            <div class="badge ${isUnlocked ? 'unlocked' : 'locked'}" title="${achievement.name}: ${achievement.description}">
                ${achievement.icon}
            </div>
        `;
    }).join('');
    
    // Save unlocked achievements
    const allUnlocked = achievements.filter(a => a.check(stats, streak, personalRecords, history)).map(a => a.id);
    localStorage.setItem('unlockedAchievements', JSON.stringify(allUnlocked));
    
    // Show celebration for newly unlocked
    if (newlyUnlocked.length > 0) {
        showAchievementCelebration(newlyUnlocked[0]);
    }
}

// ===== GOALS & TARGETS =====
function renderGoalProgress() {
    const goalContainer = document.getElementById('goalProgress');
    if (!goalContainer) return;
    
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    const weekStart = getWeekStart(new Date());
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);
    
    // Count workouts this week
    const thisWeekWorkouts = history.filter(w => {
        const workoutDate = new Date(w.date);
        return workoutDate >= weekStart && workoutDate < weekEnd;
    }).length;
    
    const goal = settings.weeklyGoal;
    const progress = Math.min((thisWeekWorkouts / goal) * 100, 100);
    const remaining = Math.max(goal - thisWeekWorkouts, 0);
    
    goalContainer.innerHTML = `
        <div class="goal-header">
            <span>Weekly Goal: ${thisWeekWorkouts}/${goal} workouts</span>
            <span>${remaining > 0 ? `${remaining} to go!` : '🎉 Goal reached!'}</span>
        </div>
        <div class="goal-bar">
            <div class="goal-fill" style="width: ${progress}%"></div>
        </div>
    `;
}

function showAchievementCelebration(achievement) {
    const modal = document.getElementById('achievementModal');
    if (!modal) return;
    
    const iconEl = document.getElementById('achievementIcon');
    const nameEl = document.getElementById('achievementName');
    const descEl = document.getElementById('achievementDesc');
    
    if (iconEl) iconEl.textContent = achievement.icon;
    if (nameEl) nameEl.textContent = achievement.name;
    if (descEl) descEl.textContent = achievement.description;
    
    modal.classList.remove('hidden');
    playSound('success');
    
    // Auto-close after 4 seconds
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 4000);
}

function calculateStreak(history) {
    if (history.length === 0) return 0;
    
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const workoutDates = history.map(w => {
        const date = new Date(w.date);
        date.setHours(0, 0, 0, 0);
        return date.getTime();
    });
    
    const uniqueDates = [...new Set(workoutDates)].sort((a, b) => b - a);
    
    for (let i = 0; i < uniqueDates.length; i++) {
        const expectedDate = new Date(today);
        expectedDate.setDate(expectedDate.getDate() - i);
        expectedDate.setHours(0, 0, 0, 0);
        
        if (uniqueDates.includes(expectedDate.getTime())) {
            streak++;
        } else if (i === 0) {
            continue;
        } else {
            break;
        }
    }
    
    return streak;
}

function renderWorkoutHistory() {
    const historyEl = document.getElementById('workoutHistory');
    if (!historyEl) return;
    
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    
    if (history.length === 0) {
        historyEl.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">No workouts yet. Start your first workout!</p>';
        return;
    }
    
    historyEl.innerHTML = history.slice(0, 10).map(workout => {
        const date = new Date(workout.date);
        const formattedDate = date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric'
        });
        const duration = workout.duration ? `${Math.floor(workout.duration / 60)}min` : '';
        
        return `
            <div class="history-item">
                <div>
                    <div class="history-date">${formattedDate}</div>
                    <div class="history-type">${workout.type}</div>
                    ${duration ? `<div class="history-duration">⏱️ ${duration}</div>` : ''}
                </div>
                <span class="history-exercises">${workout.exercises} exercises</span>
            </div>
        `;
    }).join('');
}

// ===== UTILITIES =====
function playSound(type) {
    if (!settings.soundEnabled) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        if (type === 'complete') {
            // Short positive beep for completing exercise
            playTone(audioContext, 880, 0.1, 100);
        } else if (type === 'success') {
            // Victory fanfare for finishing workout or PR
            playTone(audioContext, 523, 0.15, 100);
            setTimeout(() => playTone(audioContext, 659, 0.15, 100), 100);
            setTimeout(() => playTone(audioContext, 784, 0.15, 100), 200);
            setTimeout(() => playTone(audioContext, 1047, 0.2, 150), 300);
        } else if (type === 'alarm') {
            // Rest timer complete - attention-grabbing
            playTone(audioContext, 800, 0.2, 150);
            setTimeout(() => playTone(audioContext, 800, 0.2, 150), 200);
            setTimeout(() => playTone(audioContext, 1000, 0.25, 200), 400);
        } else if (type === 'tick') {
            // Timer tick - subtle
            playTone(audioContext, 600, 0.05, 30);
        } else if (type === 'warning') {
            // Warning sound - 10 seconds left
            playTone(audioContext, 440, 0.1, 80);
        } else if (type === 'start') {
            // Workout start sound
            playTone(audioContext, 440, 0.1, 80);
            setTimeout(() => playTone(audioContext, 660, 0.15, 100), 100);
        } else {
            // Default beep
            playTone(audioContext, 600, 0.1, 100);
        }
    } catch (e) {
        console.log('Audio not supported');
    }
}

function playTone(audioContext, frequency, gain, duration) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    gainNode.gain.value = gain;
    
    // Fade out to avoid clicks
    gainNode.gain.setValueAtTime(gain, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration / 1000);
}

function exportData() {
    const data = {
        workoutHistory: JSON.parse(localStorage.getItem('workoutHistory') || '[]'),
        warmupHistory: JSON.parse(localStorage.getItem('warmupHistory') || '[]'),
        workoutStats: JSON.parse(localStorage.getItem('workoutStats') || '{}'),
        personalRecords: personalRecords,
        weeklyPlan: weeklyPlan,
        exerciseNotes: exerciseNotes,
        customWorkouts: customWorkouts,
        settings: settings,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gym-plan-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    playSound('success');
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                
                if (confirm('This will replace all existing data. Continue?')) {
                    // Restore data to localStorage
                    if (data.workoutHistory) localStorage.setItem('workoutHistory', JSON.stringify(data.workoutHistory));
                    if (data.warmupHistory) localStorage.setItem('warmupHistory', JSON.stringify(data.warmupHistory));
                    if (data.workoutStats) localStorage.setItem('workoutStats', JSON.stringify(data.workoutStats));
                    if (data.personalRecords) {
                        personalRecords = data.personalRecords;
                        localStorage.setItem('personalRecords', JSON.stringify(personalRecords));
                    }
                    if (data.weeklyPlan) {
                        weeklyPlan = data.weeklyPlan;
                        localStorage.setItem('weeklyPlan', JSON.stringify(weeklyPlan));
                    }
                    if (data.exerciseNotes) {
                        exerciseNotes = data.exerciseNotes;
                        localStorage.setItem('exerciseNotes', JSON.stringify(exerciseNotes));
                    }
                    if (data.customWorkouts) {
                        customWorkouts = data.customWorkouts;
                        localStorage.setItem('customWorkouts', JSON.stringify(customWorkouts));
                    }
                    if (data.settings) {
                        settings = { ...settings, ...data.settings };
                        saveSettings();
                    }
                    
                    // Refresh UI
                    updateStats();
                    renderWorkoutHistory();
                    renderPersonalRecords();
                    renderWeeklyPlanner();
                    renderProgressChart();
                    renderMuscleRecovery();
                    renderAchievements();
                    renderCustomWorkouts();
                    renderGoalProgress();
                    applyTheme();
                    
                    playSound('success');
                    alert('Data imported successfully!');
                }
            } catch (err) {
                alert('Error reading file. Please ensure it is a valid JSON backup.');
                console.error(err);
            }
        };
        reader.readAsText(file);
    });
    
    input.click();
}

function clearAllData() {
    if (confirm('Are you sure you want to clear all workout data? This cannot be undone.')) {
        localStorage.removeItem('workoutHistory');
        localStorage.removeItem('warmupHistory');
        localStorage.removeItem('workoutStats');
        updateStats();
        renderWorkoutHistory();
        alert('All data cleared.');
    }
}

function updateOnlineStatus() {
    const offlineIndicator = document.getElementById('offlineIndicator');
    if (offlineIndicator) {
        if (!navigator.onLine) {
            offlineIndicator.classList.remove('hidden');
        } else {
            offlineIndicator.classList.add('hidden');
        }
    }
}

// ===== PWA INSTALL =====
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.getElementById('installBtn');
    if (installBtn) installBtn.classList.remove('hidden');
});

const installBtn = document.getElementById('installBtn');
if (installBtn) {
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        deferredPrompt = null;
        installBtn.classList.add('hidden');
    });
}

window.addEventListener('appinstalled', () => {
    const installBtn = document.getElementById('installBtn');
    if (installBtn) installBtn.classList.add('hidden');
});
