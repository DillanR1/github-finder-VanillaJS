class Github {
  constructor() {
    this.client_id = "2520b5b5db27aff36ea2";
    this.client_secret = "db7efc72751a374a081980085c5e893668d5e02a";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
        profile
    }
  }
}

// NOTE profile alone is same as profile: profile in ES6+