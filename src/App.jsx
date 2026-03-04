import './App.css'

function App() {

  const posts = [
    {
      title: "First small note",
      date: "Feb 24, 2026",
      content: `
        Hey we Are performing the demo today with the team KDK GFG Chapter..
      `
    },
    {
      title: "Why minimal feels better now",
      date: "Feb 19, 2026",
      content: `
        After trying fifteen frameworks, shiny dashboards 
        and three different CMS-es… the fastest blog 
        turned out to be ~120 lines of JSX.
        
        No backend. No build step surprises. 
        Just text that lives inside the code.
      `
    },
    {
      title: "Hello from Nashik",
      date: "Feb 18, 2026",
      content: `
        Still cold in the mornings.
        Chai + code is currently the most productive combo.
        Planning to keep this page ugly but honest for a while.
      `
    }
  ];

  return (
    <div className="blog-wrapper">
      <header>
        <h1>Aishwary</h1>
        <p>short notes • no fancy stuff</p>
      </header>

      <main>
        {posts.map((post, i) => (
          <article key={i}>
            <h2>{post.title}</h2>
            <time>{post.date}</time>
            <div className="content">
              {post.content.split('\n').map((line, idx) => (
                <p key={idx}>{line.trim()}</p>
              ))}
            </div>
          </article>
        ))}
      </main>

      <footer>
        <small>built with react • {new Date().getFullYear()}</small>
      </footer>
    </div>
  )
}

export default App