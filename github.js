class Github {
  constructor() {
    this.client_id = "2520b5b5db27aff36ea2";
    this.client_secret = "db7efc72751a374a081980085c5e893668d5e02a";
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
        profile,
        repos
    }
  }
}

// NOTE profile alone is same as profile: profile in ES6+