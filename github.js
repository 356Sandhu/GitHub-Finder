// Github API Keys
// Client ID: 456ed9e7a96eb4719f95
// Client Secret: 3f3eb7a0d4c6f4f94157467129c4d22c197bb0bc

class GitHub {
  constructor(){
    this.client_id = '456ed9e7a96eb4719f95'
    this.client_secret = '3f3eb7a0d4c6f4f94157467129c4d22c197bb0bc'
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return{
      profile,
      repos
    }
  }
}