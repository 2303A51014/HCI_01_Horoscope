const zodiacData = {
    Aries: {
        time: {
            weekly: "This week, Aries will feel energetic and ready to take on challenges. Focus your energy on productive activities to achieve maximum results. A sudden idea may bring unexpected rewards.",
            monthly: "November promises new opportunities in career and personal growth. Be open to collaborations that might lead to success. Your confidence will inspire those around you.",
            yearly: "2024 will be a transformative year for Aries, full of growth and success. This is the time to set bold goals and chase them. Personal relationships will also take a positive turn."
        },
        insights: {
            health: "Take care of your throat and respiratory system. Regular exercise will boost your overall well-being. Ensure proper rest to maintain energy levels.",
            wealth: "Investments made this year are likely to pay off in the long run. Consider seeking financial advice for optimal growth. Be mindful of unnecessary expenses.",
            relationship: "Spend quality time with your loved ones to strengthen bonds. Small gestures will make a big impact on your relationships. A heart-to-heart conversation may bring clarity.",
            education: "Aries students will excel by focusing on their goals and avoiding distractions. Group discussions may further enhance your learning. Pursuing creative courses will be rewarding."
        }
    },
    Taurus: {
        time: {
            weekly: "Taurus, this week is ideal for slowing down and recharging your energy. Reflect on your goals to ensure you're on the right path. An unexpected reunion may brighten your week.",
            monthly: "Expect stability in finances and personal relationships this month. Stay focused on long-term goals for sustained progress. Trust your instincts in decision-making.",
            yearly: "2024 will bring consistent progress, provided you stay disciplined. New opportunities for learning will come your way. Strengthen your personal network for growth."
        },
        insights: {
            health: "Focus on maintaining a balanced lifestyle while staying active. A nutritious diet will improve your stamina. Regular relaxation practices can help with stress.",
            wealth: "Your financial situation will improve with careful planning. Look for ways to diversify your income. Avoid impulsive purchases to maintain savings.",
            relationship: "Communication is key to maintaining peace in relationships. A simple gesture of kindness will go a long way. Prioritize resolving long-standing issues.",
            education: "Steady progress will be achieved by staying disciplined in studies. Participating in skill-enhancing workshops may prove beneficial. Avoid procrastination to stay ahead."
        }
    },
    Gemini: {
        time: {
            weekly: "Gemini, this week is great for starting new projects and creative endeavors. Networking will bring you closer to your goals. Be open to constructive feedback.",
            monthly: "This month will bring some exciting changes in your personal life. Embrace new experiences with optimism. A short trip may prove rejuvenating.",
            yearly: "2024 will be a year of adaptability and growth for Gemini. Flexibility will help you overcome challenges. Strengthening bonds with family will bring joy."
        },
        insights: {
            health: "Pay attention to your mental health and avoid overthinking. Stay hydrated to maintain energy levels. Consider outdoor activities to boost your mood.",
            wealth: "Consider diversifying your income streams to maximize earnings. Unexpected expenses may arise; plan ahead. Investing in knowledge will bring long-term benefits.",
            relationship: "Communication is key to resolving any relationship issues this month. Reconnect with old friends for emotional support. Prioritize trust to build stronger connections.",
            education: "Your curiosity will drive academic success, especially in creative fields. Participate in group discussions for diverse perspectives. A mentor may guide you towards success."
        }
    },
    Cancer: {
        time: {
            weekly: "Cancer, this week you may feel more introspective and in touch with your emotions. Use this time to heal and recharge. Journaling may help clear your mind.",
            monthly: "Expect a month of reflection and personal growth. Surround yourself with positivity to stay motivated. Let go of unnecessary worries for peace of mind.",
            yearly: "2024 is a year of emotional healing and stability for Cancer. Family connections will bring comfort. Focus on personal milestones to stay grounded."
        },
        insights: {
            health: "Take care of your digestive system and manage stress effectively. Light exercises will improve your overall well-being. Stay hydrated for better energy.",
            wealth: "Financial security is possible with careful planning and budgeting. Look for ways to increase savings. Avoid risks with unfamiliar investments.",
            relationship: "Your close relationships will benefit from more open communication. Celebrate small wins with loved ones. Show appreciation to strengthen emotional bonds.",
            education: "Cancer students will thrive in environments where they feel emotionally supported. Creative projects may bring recognition. Stay consistent to achieve your goals."
        }
    },
    Leo: {
        time: {
            weekly: "Leo, this week is perfect for expressing your creativity and passion. Leadership opportunities may arise; seize them. A social gathering will uplift your spirits.",
            monthly: "This month, expect an increase in social interactions and opportunities for networking. New connections may lead to exciting ventures. Balance work and fun for best results.",
            yearly: "2024 will be a year of professional achievements and recognition for Leo. Embrace challenges with confidence. Personal growth will come from unexpected opportunities."
        },
        insights: {
            health: "Maintain a balanced diet and stay active to keep your energy levels high. Yoga or meditation will improve focus. Avoid overexertion to stay healthy.",
            wealth: "Financial stability is on the horizon; avoid overspending on luxuries. Seek advice before major purchases. A side hustle may enhance income.",
            relationship: "A month to strengthen bonds with loved ones through shared experiences. Be mindful of others' needs. A surprise gesture may deepen relationships.",
            education: "Confidence in your abilities will help you succeed in competitive exams. A new subject might pique your interest. Collaborate with peers for better understanding."
        }
    },
    Virgo: {
        time: {
            weekly: "Virgo, this week you'll feel more organized and productive, perfect for tackling tasks. A small achievement will boost your morale. Plan ahead to avoid last-minute stress.",
            monthly: "Expect a month of detailed work and achievement of your goals. Focus on tasks requiring precision. A mentor’s advice may guide you to success.",
            yearly: "2024 is a year of personal growth and success in all your endeavors. Collaborations may bring unexpected gains. Celebrate your progress with loved ones."
        },
        insights: {
            health: "Focus on maintaining a healthy routine to avoid burnout. Adequate sleep will recharge your mind. Include mindfulness practices in your daily schedule.",
            wealth: "Careful investments will pay off in the long term this year. Be cautious of impulsive decisions. A budget plan will keep finances in check.",
            relationship: "You will find balance in relationships by maintaining independence. Be patient with misunderstandings. Shared activities will strengthen bonds.",
            education: "Virgo’s attention to detail will lead to excellent academic results. Experimenting with new learning methods might work well. Reward yourself for milestones achieved."
        }
    },
    Libra: {
        time: {
            weekly: "Libra, this week is great for balancing your personal and professional life. Seek harmony in your daily activities to stay stress-free. A creative opportunity may present itself.",
            monthly: "Expect harmony in your relationships and positive changes at work. Focus on nurturing partnerships to gain trust. A financial surprise may bring relief.",
            yearly: "2024 will be a year of partnership and collaboration for Libra. You'll find joy in creating new connections. Positive changes are expected in family dynamics."
        },
        insights: {
            health: "Focus on maintaining a balanced lifestyle while staying active. Yoga and meditation will help with inner peace. Avoid overindulging in sweets this month.",
            wealth: "Your financial situation will improve with careful planning. Investments in mutual funds may yield benefits. Be cautious about unnecessary loans.",
            relationship: "Communication is key to maintaining peace in relationships. Spending quality time with loved ones will deepen bonds. Forgive past grievances for a fresh start.",
            education: "Collaborative learning and group studies will benefit Libras this year. You may discover a new skill that will help academically. Stay consistent with your studies."
        }
    },
    Scorpio: {
        time: {
            weekly: "Scorpio, this week will bring intense emotions and deep introspection. Channel this energy into productive work. A moment of clarity may lead to a breakthrough.",
            monthly: "This month, expect profound changes in your career and personal life. Embrace the unknown with confidence. A close friend may offer valuable guidance.",
            yearly: "2024 is a year of transformation and new beginnings for Scorpio. Shed past burdens and embrace growth. Stronger ties with family will emerge this year."
        },
        insights: {
            health: "Focus on managing emotions to avoid burnout. Mindfulness activities will help stabilize your mental health. Pay attention to your sleep routine.",
            wealth: "Good time to invest in long-term projects or ventures. Diversify your investments for better returns. Avoid impulsive spending on luxury items.",
            relationship: "Your relationships will deepen if you open up emotionally. Honest conversations will clear misunderstandings. Be supportive of your partner’s goals.",
            education: "Scorpios will excel in research-based and deep-focus academic projects. A mentor might provide key insights. Keep pushing forward despite challenges."
        }
    },
    Sagittarius: {
        time: {
            weekly: "Sagittarius, this week is perfect for expanding your horizons and learning something new. An adventure awaits; embrace it fully. New acquaintances may provide valuable insights.",
            monthly: "Expect a month of exciting travel and new experiences. Explore new cultures or hobbies for inspiration. Financial growth might accompany these experiences.",
            yearly: "2024 will bring new opportunities for personal growth and travel. Expect gains in career and personal projects. A shift in perspective will bring new energy to your life."
        },
        insights: {
            health: "Stay active with outdoor exercises to maintain physical and mental health. Focus on keeping a balanced diet for sustained energy. Practice gratitude for better emotional health.",
            wealth: "Financial prosperity is within reach with careful planning. Investments in education or travel may bring rewards. Keep a savings plan for future growth.",
            relationship: "This year, build new relationships with people who align with your values. Stay open-minded in love. Fun activities will strengthen bonds.",
            education: "Sagittarians will excel in fields related to travel, culture, and philosophy. Keep an open mind to new ideas and perspectives. Stay curious and explore."
        }
    },
    Capricorn: {
        time: {
            weekly: "Capricorn, this week is ideal for organizing and refining your plans. A chance to enhance your career will appear. Stay focused and avoid distractions.",
            monthly: "This month, hard work will bring visible rewards in your career. Pay attention to opportunities for leadership. Spend quality time with family for relaxation.",
            yearly: "2024 is a year of achievements for Capricorn, with success in both career and personal goals. Focus on steady growth and long-term plans for prosperity."
        },
        insights: {
            health: "Focus on your bones and joints, ensuring you stay active but not overexert yourself. A solid fitness plan will enhance your vitality. Manage stress to avoid burnout.",
            wealth: "Your financial situation will benefit from careful planning and investments. Look into long-term savings options. Avoid risky ventures this year.",
            relationship: "This year will bring steady progress in relationships. Your dedication to others will be recognized. Focus on mutual understanding and compromise.",
            education: "Capricorn students will thrive with disciplined study habits and focused attention. Stay motivated to reach your academic goals. A mentor will guide you toward success."
        }
    },
    Aquarius: {
        time: {
            weekly: "Aquarius, this week will bring clarity regarding your future plans. Focus on building your networks and seeking new opportunities. A new idea may spark your creativity.",
            monthly: "This month, expect progress in career and personal goals. Collaborations will bring valuable insights. A family gathering will bring warmth and joy.",
            yearly: "2024 will be a year of innovation and transformation for Aquarius. Embrace the changes coming your way. Personal relationships will strengthen through open communication."
        },
        insights: {
            health: "Stay mentally and physically active to boost your energy levels. Focus on a balanced diet and avoid stress. Take time for self-care to stay centered.",
            wealth: "Financial stability is on the horizon with strategic investments. Look for opportunities in technology or innovation. Focus on long-term savings for security.",
            relationship: "Aquarians will strengthen their bonds with family and friends through open dialogue. Romantic relationships may see growth through deeper connection.",
            education: "Your creativity and originality will shine in academic settings. Pursue new fields of study that pique your interest. Stay focused and diligent to excel."
        }
    },
    Pisces: {
        time: {
            weekly: "Pisces, this week will bring emotional clarity. You may feel more connected to your spiritual side. Use this time for introspection and creativity.",
            monthly: "This month, expect a shift in your perspective on life. Focus on self-care and nurturing your emotional well-being. Creative projects will thrive.",
            yearly: "2024 will be a year of emotional growth and spiritual awakening. Embrace your intuition and trust your inner guidance. New creative opportunities will emerge."
        },
        insights: {
            health: "Stay mindful of your mental health. Meditation and relaxation techniques will help alleviate stress. Pay attention to your feet and avoid strain.",
            wealth: "Your financial situation will improve with steady planning. Look for opportunities to save and invest in long-term goals. Avoid risky ventures this year.",
            relationship: "Pisces will experience deep emotional connections in relationships. Be open to discussing feelings and sharing vulnerabilities. Compassion will strengthen your bonds.",
            education: "Creativity will enhance your academic success. Explore artistic or spiritual subjects that resonate with you. Seek support from mentors or peers for guidance."
        }
    }
};

function navigateToNextPage() {
    const selectedZodiac = document.getElementById('zodiacSigns').value;
 
    // Get selected basis options
    const basisOptions = Array.from(document.querySelectorAll("#basis-options input[type='checkbox']:checked")).map(option => option.value);
 
    // Get selected life plan options
    const lifeplanOptions = Array.from(document.querySelectorAll("#lifeplan-options input[type='checkbox']:checked")).map(option => option.value);
 
    // Validation
    if (!selectedZodiac) {
       alert("Please select a zodiac sign.");
       return;
    }
 
    if (basisOptions.length === 0) {
       alert("Please select at least one basis option.");
       return;
    }
 
    if (lifeplanOptions.length === 0) {
       alert("Please select at least one life plan option.");
       return;
    }
 
    // Create URL parameters
    const params = new URLSearchParams();
    params.append('zodiac', selectedZodiac);
    params.append('basis', basisOptions.join(',')); // Send selected basis options
    params.append('lifeplan', lifeplanOptions.join(',')); // Send selected life plan options
 
    // Debugging log
    console.log('Navigating to:', 'display.html?' + params.toString());
 
    // Navigate to the next page
    window.location.href = 'display.html?' + params.toString();
 }
 