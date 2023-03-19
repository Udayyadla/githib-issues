const issuesList = document.getElementById('issues-list');
const pageNumber = document.getElementById('page-number');
let currentPage = 1;

function getIssues(page) {
  const apiUrl = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(issues => {
      // Clear the previous issues
      issuesList.innerHTML = '';
      // Display the issue names in an ordered list
      issues.forEach(issue => {
        const li = document.createElement('li');
        li.innerText = issue.title;
        issuesList.appendChild(li);
      });
      // Update the page number
      pageNumber.innerText = `Page number ${page}`;
      currentPage = page;
    })
    .catch(error => console.log(error));
}

getIssues(currentPage);

document.getElementById('load_prev').addEventListener('click', () => {
  if (currentPage > 1) {
    getIssues(currentPage - 1);
  }
});

document.getElementById('load_next').addEventListener('click', () => {
  getIssues(currentPage + 1);
});

