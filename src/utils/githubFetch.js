const { Octokit } = require('@octokit/rest');
// require('dotenv').config();


// Function to fetch array of projects
async function fetchProjects() {
  const octokit = new Octokit({
    auth: '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', // Replace with .env later
  });

  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/projects', {
      owner: 'ChristianAlteri', 
      repo: 'Family-Vault',   
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

  module.exports =  fetchProjects 