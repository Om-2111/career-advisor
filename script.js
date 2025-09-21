document.getElementById("careerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const skills = document.getElementById("skills").value;
  const interests = document.getElementById("interests").value;
  const education = document.getElementById("education").value;
  const hours = document.getElementById("hours").value;

  // Mock AI results (replace with API later if needed)
  const careers = [
    {
      title: "Web Developer",
      skills: "Learn JavaScript, React",
      project: "Build a personal portfolio website"
    },
    {
      title: "Robotics Engineer",
      skills: "Learn Arduino, C++",
      project: "Create a line-following robot"
    },
    {
      title: "AI Prompt Engineer",
      skills: "Learn NLP, Python",
      project: "Build a chatbot with Gemini API"
    }
  ];

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<h2>Recommended Career Paths</h2>";

  careers.forEach(career => {
    resultsDiv.innerHTML += `
      <div class="card">
        <h3>${career.title}</h3>
        <p><strong>Skills to Learn:</strong> ${career.skills}</p>
        <p><strong>Starter Project:</strong> ${career.project}</p>
      </div>
    `;
  });
});
