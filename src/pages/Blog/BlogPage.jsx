import React, { useState } from 'react';
import { 
  Calendar, User, Tag, Clock, ArrowLeft, Search,
  BookOpen, Tv, Trophy, Folder
} from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ScrollToTop } from '../../components/ScrollUpButton';
import './BlogPage.css'

export function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Learning in Modern Education",
      excerpt: "Exploring how technology is revolutionizing the way students learn and interact with educational content...",
      content: `<p>Technology has fundamentally transformed the educational landscape, creating unprecedented opportunities for students and educators alike. Digital learning platforms have made education more accessible, personalized, and engaging than ever before.</p>

<p>The integration of artificial intelligence, virtual reality, and adaptive learning systems is reshaping how we approach teaching and learning. These technologies enable personalized learning experiences that cater to individual student needs, learning styles, and pace.</p>

<p>Online collaboration tools have broken down geographical barriers, allowing students from different parts of the world to work together on projects and share ideas. This global connectivity prepares students for the increasingly interconnected world they will inherit.</p>

<p>However, the shift to digital learning also presents challenges. Ensuring equal access to technology, maintaining student engagement in virtual environments, and balancing screen time with traditional learning methods are critical considerations for educators and policymakers.</p>

<p>Looking ahead, the future of education will likely blend the best of both worlds – combining the convenience and personalization of digital tools with the irreplaceable human connection and hands-on experiences of traditional classroom learning.</p>`,
      category: "Education",
      author: "Dr. Sarah Johnson",
      date: "October 25, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Innovative Teaching Methods That Engage Students",
      excerpt: "Discover effective strategies that make learning fun and interactive for students of all ages...",
      content: `<p>Gone are the days of passive learning where students simply absorbed information from lectures. Today's most effective educators employ innovative teaching methods that actively engage students in the learning process.</p>

<p>Project-based learning allows students to explore real-world problems and develop solutions, fostering critical thinking and creativity. Flipped classrooms reverse traditional instruction by having students review content at home and use class time for discussions and hands-on activities.</p>

<p>Gamification introduces game elements like points, badges, and leaderboards into lessons, making learning more enjoyable and competitive. This approach has shown remarkable success in increasing student motivation and participation.</p>

<p>Collaborative learning encourages students to work in groups, developing communication and teamwork skills essential for their future careers. Teachers who facilitate rather than dictate learning help students become more independent and self-directed learners.</p>

<p>The key to successful innovation in teaching is finding the right balance between new methods and proven techniques, always keeping the individual needs and learning styles of students at the center of educational planning.</p>`,
      category: "Education",
      author: "Prof. Michael Chen",
      date: "October 22, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop"
    },
    {
      id: 3,
      title: "School Theater Program Prepares for Annual Musical",
      excerpt: "Behind the scenes look at how students are bringing this year's spectacular production to life...",
      content: `<p>Our school's theater department is buzzing with excitement as preparations for the annual musical reach their final stages. This year's production promises to be the most ambitious yet, featuring a talented cast of over 50 students.</p>

<p>The theater program provides students with invaluable opportunities to develop confidence, public speaking skills, and creative expression. Participation in drama has been shown to improve academic performance, enhance social skills, and build lasting friendships.</p>

<p>Students involved in the production are learning much more than their lines and choreography. They're discovering the importance of teamwork, dedication, and perseverance. From set design to costume creation, lighting to sound engineering, every aspect of the production is a learning experience.</p>

<p>Director Emily Rodriguez shares, "Theater teaches life lessons that extend far beyond the stage. Students learn to handle pressure, work collaboratively, and express themselves authentically. These are skills they'll carry with them forever."</p>

<p>Performances are scheduled for the first weekend of November, with tickets available through the school's website. The community is invited to support our talented young performers and witness their hard work come to life on stage.</p>`,
      category: "Entertainment",
      author: "Emma Davis",
      date: "October 20, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1200&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Music Department Hosts Talent Showcase",
      excerpt: "Students display their musical prowess in a spectacular evening of performances...",
      content: `<p>Last Friday evening, our school auditorium transformed into a concert hall as the music department hosted its annual talent showcase. The event featured performances from students across all grade levels, showcasing a diverse range of musical styles and instruments.</p>

<p>From classical piano solos to contemporary vocal performances, rock bands to jazz ensembles, the variety of talent on display was truly remarkable. The audience of parents, teachers, and fellow students was treated to nearly three hours of outstanding musicianship.</p>

<p>Music education plays a crucial role in student development, improving cognitive abilities, enhancing memory, and fostering emotional expression. Studies have shown that students involved in music programs often perform better academically and develop stronger discipline and time management skills.</p>

<p>Music teacher James Morrison noted, "These showcases are more than just performances – they're opportunities for students to build confidence, overcome stage fright, and share their passion with others. The growth we see in our students throughout the year is incredible."</p>

<p>The evening concluded with a standing ovation for all performers. Plans are already underway for next semester's spring concert, which will feature the school's orchestra and choir performing a special collaborative piece.</p>`,
      category: "Entertainment",
      author: "James Wilson",
      date: "October 18, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Basketball Team Wins Regional Championship",
      excerpt: "Our varsity basketball team clinches the regional title in a thrilling final game...",
      content: `<p>In a nail-biting finish that had spectators on the edge of their seats, our varsity basketball team secured the regional championship with a dramatic 78-76 victory over longtime rivals Jefferson High. The win marks the culmination of months of hard work, dedication, and teamwork.</p>

<p>Team captain Marcus Thompson scored the winning basket with just 3.2 seconds left on the clock, sending the crowd into a frenzy of celebration. "This moment is what we've been working toward all season," Thompson said after the game. "Our team showed incredible resilience and never gave up, even when we were down by 12 points in the third quarter."</p>

<p>Coach Rodriguez praised his team's performance: "These young athletes have demonstrated not just exceptional skill on the court, but also character, sportsmanship, and determination. They've made our school incredibly proud."</p>

<p>The victory qualifies the team for the state championships, which will be held next month. The achievement represents the school's first regional title in basketball in over a decade, reigniting school spirit and athletic pride.</p>

<p>The team will begin preparations for the state tournament immediately, with practice sessions intensifying as they aim to bring home another championship trophy. The entire school community is rallying behind them, organizing pep rallies and fundraisers to support their journey to state-level competition.</p>`,
      category: "Sport",
      author: "Robert Martinez",
      date: "October 16, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Track and Field Team Sets New School Records",
      excerpt: "Athletic excellence on display as multiple records fall during season opener...",
      content: `<p>The track and field season kicked off with a spectacular meet that saw five school records broken and numerous personal bests achieved. The outstanding performances signal a promising season ahead for our athletic program.</p>

<p>Senior sprinter Jasmine Williams shattered the 200-meter record with a time of 23.47 seconds, beating the previous record by nearly half a second. "I've been training hard all summer for this moment," Williams said. "Breaking the school record is a dream come true, but I'm not done yet. I want to keep pushing my limits."</p>

<p>The boys' 4x100 relay team also made history, setting a new school record of 41.23 seconds. Team members celebrated their achievement while acknowledging the work still ahead. Long jumper David Park cleared 7.2 meters, establishing a new benchmark for future athletes to chase.</p>

<p>Coach Thompson expressed pride in his athletes' achievements: "These records represent years of dedication, countless hours of practice, and an unwavering commitment to excellence. But more importantly, they inspire younger athletes to believe in what's possible with hard work and determination."</p>

<p>With such a strong start to the season, expectations are high for the track and field program. The team will compete in several invitational meets before the district championships in May.</p>`,
      category: "Sport",
      author: "Lisa Anderson",
      date: "October 14, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=600&fit=crop"
    },
    {
      id: 7,
      title: "New Student Council Initiatives for 2025",
      excerpt: "Student leaders announce exciting plans to enhance school life and community engagement...",
      content: `<p>The newly elected student council has unveiled an ambitious agenda for the upcoming academic year, focusing on sustainability, mental health awareness, and community service. The initiatives reflect students' commitment to making positive changes in their school and broader community.</p>

<p>Student body president Sarah Kim outlined the main objectives: "We want to create a more inclusive, environmentally conscious, and supportive school environment. Our initiatives are designed to address issues that students care deeply about and make a tangible difference in daily school life."</p>

<p>The sustainability initiative includes plans to reduce single-use plastics in the cafeteria, establish a school-wide recycling program, and create a student-run garden. These efforts aim to reduce the school's environmental footprint while educating students about ecological responsibility.</p>

<p>A new mental health awareness campaign will provide resources and support for students dealing with stress, anxiety, and other challenges. The council is partnering with counselors to organize workshops and create safe spaces for students to discuss mental health openly.</p>

<p>Community service projects will connect students with local organizations, fostering a sense of civic responsibility. Monthly volunteer opportunities will be organized, allowing students to contribute to causes they're passionate about while earning service hours.</p>`,
      category: "Others",
      author: "David Thompson",
      date: "October 12, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
    },
    {
      id: 8,
      title: "School Library Unveils New Digital Resources",
      excerpt: "Expanded online database and e-book collection enhance research capabilities...",
      content: `<p>The school library has significantly upgraded its digital offerings, providing students with access to thousands of e-books, academic journals, and research databases. This expansion represents a major investment in educational resources and reflects the evolving nature of information access in the digital age.</p>

<p>Librarian Jennifer Martinez explained the improvements: "We've partnered with leading educational publishers to provide our students with the same resources available at major universities. Students can now access scholarly articles, primary source documents, and specialized databases from home or anywhere with internet access."</p>

<p>The new system includes features like citation generators, collaboration tools, and personalized reading recommendations based on student interests and grade level. Tutorial sessions are being offered to help students and teachers maximize the potential of these new resources.</p>

<p>Teachers across all departments have expressed enthusiasm about integrating these resources into their curriculum. The enhanced digital library supports research projects, encourages independent learning, and helps students develop critical information literacy skills.</p>

<p>Students can access the digital library through the school website using their student ID credentials. Technical support is available during and after school hours to assist with any access issues or questions about using the new platforms.</p>`,
      category: "Others",
      author: "Patricia Lee",
      date: "October 10, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&h=600&fit=crop"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', icon: Folder, color: '#667eea' },
    { id: 'Education', label: 'Education', icon: BookOpen, color: '#48bb78' },
    { id: 'Entertainment', label: 'Entertainment', icon: Tv, color: '#ed64a6' },
    { id: 'Sport', label: 'Sport', icon: Trophy, color: '#f6ad55' },
    { id: 'Others', label: 'Others', icon: Tag, color: '#4299e1' }
  ];

  const getFilteredPosts = () => {
    let filtered = blogPosts;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  const getCategoryIcon = (categoryName) => {
    const category = categories.find(cat => cat.label === categoryName);
    return category ? category.icon : Tag;
  };

  const getCategoryColor = (categoryName) => {
    const category = categories.find(cat => cat.label === categoryName);
    return category ? category.color : '#667eea';
  };

  if (selectedPost) {
    return (
      <>
        
        <div className="blog-page">
          <div className="post-view">
            <button className="back-button" onClick={() => setSelectedPost(null)}>
              <ArrowLeft size={20} />
              Back to Blog
            </button>
            
            <article className="full-post">
              <div className="post-header-image">
                <img src={selectedPost.image} alt={selectedPost.title} />
              </div>
              
              <div className="post-full-content">
                <div className="post-category-badge" style={{ background: getCategoryColor(selectedPost.category) }}>
                  {selectedPost.category}
                </div>
                
                <h1 className="post-full-title">{selectedPost.title}</h1>
                
                <div className="post-full-meta">
                  <div className="meta-item">
                    <User size={18} />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={18} />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={18} />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
                
                <div 
                  className="post-body"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
                
                <div className="post-footer">
                  <button className="back-button-bottom" onClick={() => setSelectedPost(null)}>
                    <ArrowLeft size={20} />
                    Back to All Posts
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  }


  return (
    <>
<Header />
<ScrollToTop />
      <div className="blog-page">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="hero-content">
            <h1 className="hero-title">School Blog</h1>
            <p className="hero-subtitle">
              Stay updated with the latest news, stories, and insights
            </p>
          </div>
        </section>

        {/* Blog Container */}
        <div className="blog-container">
          {/* Controls */}
          <div className="blog-controls">
            <div className="category-filters">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                    style={activeCategory === category.id ? { background: category.color } : {}}
                  >
                    <Icon size={18} />
                    {category.label}
                  </button>
                );
              })}
            </div>

            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {getFilteredPosts().map(post => {
              const Icon = getCategoryIcon(post.category);
              return (
                <div
                  key={post.id}
                  className="blog-card"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-card-content">
                    <div 
                      className="blog-card-category"
                      style={{ background: getCategoryColor(post.category) }}
                    >
                      {post.category}
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-meta">
                      <div className="meta-item">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="meta-item">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


