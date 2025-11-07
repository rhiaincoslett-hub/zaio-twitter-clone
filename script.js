// Mock Data
const currentUser = {
    id: 1,
    username: 'rhiaincoslett',
    displayName: 'Rhiain Coslett',
    avatar: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
};

const initialTweets = [
    {
        id: 1,
        user: {
            username: 'elonmusk',
            displayName: 'Elon Musk',
            avatar: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            verified: true
        },
        text: 'Just launched something incredible! 🚀 The future is here.',
        timestamp: Date.now() - 5 * 60000,
        likes: 12500,
        retweets: 3200,
        comments: 890,
        isLiked: false,
        isRetweeted: false
    },
    {
        id: 2,
        user: {
            username: 'techcrunch',
            displayName: 'TechCrunch',
            avatar: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            verified: true
        },
        text: 'Breaking: Major tech company announces revolutionary AI breakthrough that could change everything we know about machine learning.',
        timestamp: Date.now() - 15 * 60000,
        likes: 4500,
        retweets: 1200,
        comments: 340,
        isLiked: true,
        isRetweeted: false
    },
    {
        id: 3,
        user: {
            username: 'designer_pro',
            displayName: 'Sarah Design',
            avatar: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            verified: false
        },
        text: 'After 10 hours of coding, finally got that animation perfect! 💫✨\n\nSometimes the smallest details make the biggest difference.\n\n#UIUX #WebDev #Design',
        timestamp: Date.now() - 30 * 60000,
        likes: 780,
        retweets: 145,
        comments: 23,
        isLiked: false,
        isRetweeted: true
    },
    {
        id: 4,
        user: {
            username: 'developer_joe',
            displayName: 'Joe Developer',
            avatar: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            verified: false
        },
        text: 'Coffee ☕ Code 💻 Repeat 🔄\n\nProductivity levels: 📈',
        timestamp: Date.now() - 45 * 60000,
        likes: 156,
        retweets: 43,
        comments: 8,
        isLiked: true,
        isRetweeted: false
    },
    {
        id: 5,
        user: {
            username: 'web_dev_tips',
            displayName: 'Web Dev Tips',
            avatar: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            verified: true
        },
        text: 'Pro tip: Always validate your input data on both client and server side. Security first! 🔒',
        timestamp: Date.now() - 60 * 60000,
        likes: 980,
        retweets: 210,
        comments: 56,
        isLiked: false,
        isRetweeted: false
    },
    {
        id: 6,
        user: {
            username: 'react_enthusiast',
            displayName: 'React Enthusiast',
            avatar: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            verified: false
        },
        text: 'Just discovered a new React hook pattern that makes state management so much cleaner!\n\nSharing the tutorial tomorrow 🎓',
        timestamp: Date.now() - 90 * 60000,
        likes: 678,
        retweets: 98,
        comments: 32,
        isLiked: false,
        isRetweeted: false
    }
];

const trendingTopics = [
    { tag: 'Breaking News', tweets: '125K', category: 'Trending in Technology' },
    { tag: 'AI', tweets: '98.5K', category: 'Technology' },
    { tag: 'SpaceX', tweets: '45.3K', category: 'Science' },
    { tag: 'WebDevelopment', tweets: '32.1K', category: 'Technology' },
    { tag: 'React', tweets: '28.9K', category: 'Technology' },
    { tag: 'JavaScript', tweets: '24.5K', category: 'Technology' }
];

const suggestedUsers = [
    {
        id: 8,
        username: 'ai_expert',
        displayName: 'AI Expert',
        avatar: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        verified: true
    },
    {
        id: 9,
        username: 'ux_designer',
        displayName: 'UX Designer',
        avatar: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
        verified: false
    },
    {
        id: 10,
        username: 'startup_founder',
        displayName: 'Startup Founder',
        avatar: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        verified: true
    }
];

// Direct Messages Data
const dmConversations = [
    {
        id: 1,
        user: {
            id: 8,
            username: 'ai_expert',
            displayName: 'AI Expert',
            avatar: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            verified: true,
            online: true
        },
        messages: [
            {
                id: 1,
                senderId: 8,
                text: 'Hey! Have you seen the latest AI developments?',
                timestamp: Date.now() - 3600000
            },
            {
                id: 2,
                senderId: 1,
                text: 'Yes! Absolutely amazing progress.',
                timestamp: Date.now() - 3500000
            },
            {
                id: 3,
                senderId: 8,
                text: 'We should collaborate on a project sometime!',
                timestamp: Date.now() - 3400000
            }
        ],
        lastMessage: 'We should collaborate on a project sometime!',
        lastMessageTime: Date.now() - 3400000,
        unread: 2
    },
    {
        id: 2,
        user: {
            id: 9,
            username: 'ux_designer',
            displayName: 'UX Designer',
            avatar: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
            verified: false,
            online: false
        },
        messages: [
            {
                id: 1,
                senderId: 9,
                text: 'Love your recent design work!',
                timestamp: Date.now() - 7200000
            },
            {
                id: 2,
                senderId: 1,
                text: 'Thank you so much! Really appreciate it.',
                timestamp: Date.now() - 7100000
            }
        ],
        lastMessage: 'Thank you so much! Really appreciate it.',
        lastMessageTime: Date.now() - 7100000,
        unread: 0
    },
    {
        id: 3,
        user: {
            id: 10,
            username: 'startup_founder',
            displayName: 'Startup Founder',
            avatar: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
            verified: true,
            online: true
        },
        messages: [
            {
                id: 1,
                senderId: 10,
                text: 'Interested in joining our startup? We need talented people like you!',
                timestamp: Date.now() - 86400000
            }
        ],
        lastMessage: 'Interested in joining our startup? We need talented people like you!',
        lastMessageTime: Date.now() - 86400000,
        unread: 1
    }
];

let activeConversation = null;

// State
let tweets = [...initialTweets];

// Utility Functions
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'now';
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;
    return date.toLocaleDateString();
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}

// Render Functions
function renderTweet(tweet) {
    return `
        <div class="tweet">
            <div class="tweet-avatar" style="background: ${tweet.user.avatar}"></div>
            <div class="tweet-content">
                <div class="tweet-header">
                    <span class="tweet-author">
                        ${tweet.user.displayName}
                        ${tweet.user.verified ? `
                            <svg class="verified-badge" viewBox="0 0 22 22" fill="currentColor">
                                <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                            </svg>
                        ` : ''}
                    </span>
                    <span class="tweet-handle">@${tweet.user.username}</span>
                    <span class="tweet-time">· ${formatTimestamp(tweet.timestamp)}</span>
                </div>
                <div class="tweet-text">${tweet.text}</div>
                <div class="tweet-actions">
                    <button class="action-btn comment" onclick="handleComment(${tweet.id})">
                        <svg viewBox="0 0 24 24">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                        ${formatNumber(tweet.comments)}
                    </button>
                    <button class="action-btn retweet ${tweet.isRetweeted ? 'active' : ''}" onclick="handleRetweet(${tweet.id})">
                        <svg viewBox="0 0 24 24" aria-hidden="true" ><g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                        </g></svg>
                        ${formatNumber(tweet.retweets)}
                    </button>
                    <button class="action-btn like ${tweet.isLiked ? 'active' : ''}" onclick="handleLike(${tweet.id})">
                        <svg viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        ${formatNumber(tweet.likes)}
                    </button>
                    <button class="action-btn share" onclick="handleShare(${tweet.id})">
                        <svg viewBox="0 0 24 24">
                            <circle cx="18" cy="5" r="3"/>
                            <circle cx="6" cy="12" r="3"/>
                            <circle cx="18" cy="19" r="3"/>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderAllTweets() {
    const container = document.getElementById('tweets-container');
    container.innerHTML = tweets.map(tweet => renderTweet(tweet)).join('');
}

function renderTrending() {
    const container = document.getElementById('trending-topics');
    container.innerHTML = trendingTopics.map((topic, index) => `
        <div class="trending-item" onclick="console.log('Trending: ${topic.tag}')">
            <div class="trending-category">${topic.category}</div>
            <div class="trending-tag">#${topic.tag}</div>
            <div class="trending-count">${topic.tweets} Tweets</div>
        </div>
    `).join('');
}

function renderSuggestedUsers() {
    const container = document.getElementById('suggested-users');
    container.innerHTML = suggestedUsers.map(user => `
        <div class="suggested-user" onclick="console.log('Follow: ${user.username}')">
            <div class="suggested-user-info">
                <div class="suggested-user-avatar" style="background: ${user.avatar}"></div>
                <div class="suggested-user-details">
                    <div class="suggested-user-name">
                        ${user.displayName}
                        ${user.verified ? `
                            <svg class="verified-badge" viewBox="0 0 24 24" fill="currentColor">
                                <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
                                </path></g>
                        ` : ''}
                    </div>
                    <div class="suggested-user-handle">@${user.username}</div>
                </div>
            </div>
            <button class="follow-btn">Follow</button>
        </div>
    `).join('');
}

// Event Handlers
function handleLike(tweetId) {
    const tweet = tweets.find(t => t.id === tweetId);
    if (tweet.isLiked) {
        tweet.isLiked = false;
        tweet.likes--;
    } else {
        tweet.isLiked = true;
        tweet.likes++;
    }
    renderAllTweets();
}

function handleRetweet(tweetId) {
    const tweet = tweets.find(t => t.id === tweetId);
    if (tweet.isRetweeted) {
        tweet.isRetweeted = false;
        tweet.retweets--;
    } else {
        tweet.isRetweeted = true;
        tweet.retweets++;
    }
    renderAllTweets();
}

function handleComment(tweetId) {
    console.log('Comment clicked for tweet:', tweetId);
    // You can implement a modal or expand comments here
}

function handleShare(tweetId) {
    console.log('Share clicked for tweet:', tweetId);
    // You can implement sharing functionality here
}

function handleTweetPost() {
    const input = document.getElementById('tweet-input');
    const text = input.value.trim();
    
    if (text.length === 0 || text.length > 280) {
        return;
    }

    const newTweet = {
        id: Date.now(),
        user: currentUser,
        text: text,
        timestamp: Date.now(),
        likes: 0,
        retweets: 0,
        comments: 0,
        isLiked: false,
        isRetweeted: false
    };

    tweets.unshift(newTweet);
    input.value = '';
    updateCharCounter();
    renderAllTweets();
}

function updateCharCounter() {
    const input = document.getElementById('tweet-input');
    const counter = document.querySelector('.char-counter');
    const submitBtn = document.getElementById('submit-tweet');
    const remaining = 280 - input.value.length;

    counter.textContent = remaining;
    counter.className = 'char-counter';

    if (remaining < 280 * 0.1) {
        counter.classList.add('warning');
    }
    if (remaining < 0) {
        counter.classList.add('danger');
    }

    submitBtn.disabled = input.value.trim().length === 0 || input.value.length > 280;
}

// Theme Management
function initTheme() {
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Direct Messages Functions
function openDMModal() {
    const modal = document.getElementById('dm-modal');
    modal.style.display = 'flex';
    renderConversations();
}

function closeDMModal() {
    const modal = document.getElementById('dm-modal');
    modal.style.display = 'none';
    activeConversation = null;
}

function renderConversations() {
    const container = document.getElementById('dm-conversations');
    container.innerHTML = dmConversations.map(conv => `
        <div class="dm-conversation ${activeConversation === conv.id ? 'active' : ''}" onclick="openConversation(${conv.id})">
            <div class="dm-conv-avatar" style="background: ${conv.user.avatar}">
                ${conv.user.online ? '<div class="online-indicator"></div>' : ''}
            </div>
            <div class="dm-conv-info">
                <div class="dm-conv-header">
                    <span class="dm-conv-name">
                        ${conv.user.displayName}
                        ${conv.user.verified ? '<svg class="verified-badge-small" viewBox="0 0 22 22" fill="currentColor"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>' : ''}
                    </span>
                    <span class="dm-conv-time">${formatTimestamp(conv.lastMessageTime)}</span>
                </div>
                <div class="dm-conv-preview">
                    ${conv.lastMessage.substring(0, 40)}${conv.lastMessage.length > 40 ? '...' : ''}
                </div>
            </div>
            ${conv.unread > 0 ? `<div class="dm-unread-badge">${conv.unread}</div>` : ''}
        </div>
    `).join('');
}

function openConversation(conversationId) {
    activeConversation = conversationId;
    const conversation = dmConversations.find(c => c.id === conversationId);

    if (!conversation) return;

    // Mark as read
    conversation.unread = 0;
    renderConversations();

    // Update chat header
    const header = document.getElementById('dm-chat-header');
    header.innerHTML = `
        <div class="dm-chat-user-info">
            <div class="dm-chat-avatar" style="background: ${conversation.user.avatar}"></div>
            <div>
                <div class="dm-chat-name">
                    ${conversation.user.displayName}
                    ${conversation.user.verified ? '<svg class="verified-badge-small" viewBox="0 0 22 22" fill="currentColor"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>' : ''}
                </div>
                <div class="dm-chat-status">${conversation.user.online ? 'Online' : 'Offline'}</div>
            </div>
        </div>
    `;

    // Render messages
    renderMessages(conversation);

    // Show input container
    document.getElementById('dm-input-container').style.display = 'flex';
}

function renderMessages(conversation) {
    const container = document.getElementById('dm-messages');
    container.innerHTML = conversation.messages.map(message => {
        const isCurrentUser = message.senderId === currentUser.id;
        return `
            <div class="dm-message ${isCurrentUser ? 'sent' : 'received'}">
                ${!isCurrentUser ? `<div class="dm-message-avatar" style="background: ${conversation.user.avatar}"></div>` : ''}
                <div class="dm-message-bubble">
                    <div class="dm-message-text">${message.text}</div>
                    <div class="dm-message-time">${formatTimestamp(message.timestamp)}</div>
                </div>
            </div>
        `;
    }).join('');

    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    if (!activeConversation) return;

    const input = document.getElementById('dm-input');
    const text = input.value.trim();

    if (text.length === 0) return;

    const conversation = dmConversations.find(c => c.id === activeConversation);
    if (!conversation) return;

    const newMessage = {
        id: conversation.messages.length + 1,
        senderId: currentUser.id,
        text: text,
        timestamp: Date.now()
    };

    conversation.messages.push(newMessage);
    conversation.lastMessage = text;
    conversation.lastMessageTime = Date.now();

    input.value = '';
    input.style.height = 'auto';

    renderMessages(conversation);
    renderConversations();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();

    // Render initial data
    renderAllTweets();
    renderTrending();
    renderSuggestedUsers();

    // Setup tweet composer
    const input = document.getElementById('tweet-input');
    const submitBtn = document.getElementById('submit-tweet');

    input.addEventListener('input', updateCharCounter);
    submitBtn.addEventListener('click', handleTweetPost);

    // Allow Enter to submit (with Shift+Enter for new line)
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleTweetPost();
        }
    });

    // Setup feed tab switching
    const feedTabs = document.querySelectorAll('.feed-tab');
    feedTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            feedTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Setup theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Setup DM functionality
    const dmModal = document.getElementById('dm-modal');
    dmModal.addEventListener('click', (e) => {
        if (e.target === dmModal) {
            closeDMModal();
        }
    });

    const dmInput = document.getElementById('dm-input');
    const dmSendBtn = document.getElementById('dm-send-btn');

    if (dmInput) {
        dmInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 120) + 'px';
        });

        dmInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    if (dmSendBtn) {
        dmSendBtn.addEventListener('click', sendMessage);
    }

    // Setup DM search
    const dmSearch = document.getElementById('dm-search');
    if (dmSearch) {
        dmSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const conversations = document.querySelectorAll('.dm-conversation');
            conversations.forEach(conv => {
                const name = conv.querySelector('.dm-conv-name').textContent.toLowerCase();
                conv.style.display = name.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }
});