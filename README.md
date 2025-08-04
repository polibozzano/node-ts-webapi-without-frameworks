# 🎧 Podsphere

## Description
Podcast Manager is a Netflix-style application that centralizes various podcast episodes organized by category. The project aims to make it easier to access and organize video podcast episodes, providing users with an intuitive and enjoyable browsing experience.

## Features
- **List podcast episodes by category**
</br>
Episodes are organized into categories such as Music, History, Technology, Art, allowing users to easily explore available content.

- **Filter episodes by podcast name**
</br>
Users can search for specific podcast names, making it easier to access desired episodes.

### Implementation
- List podcast episodes by category
    ```js
    // Endpoint: GET/list 
    // Returns a list of podcast episodes organized by categories. Example response:
    [
        {
            "podcastName": "backstage",
            "episode": "Michael Jackson - Backstage #010",
            "videoId": "2J4ABDWA25",
            "categories": ["music", "pop"]
        },
        {
            "podcastName": "greenplanet",
            "episode": "Sustainable Cities: Utopia or Real Future?",
            "videoId": "DJ901JSNIUD",
            "categories": ["environment", "urbanism"]
        }
    ]
    ```

-  Filter episodes by podcast name

    ```js
    // Endpoint: GET /episode?podcastName={name}
    //Returns a list of podcast episodes based on the provided podcast name. Example request:

    GET /episode?podcastName=backstage
    ```

----

## Technologies Used

- TypeScript – Primary language for development
- Tsup – Build and bundling tool for TypeScript projects
- Tsx – TypeScript compiler that supports fast builds
- Node.js – JavaScript runtime for building server-side applications
- @types/node – Type definitions for Node.js to support TypeScript development

---

### How to Use
1. Clone this repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run start:dev
```
4. Access the provided endpoints to list or filter podcast episodes.

---

## License

This project is licensed under the MIT License. Feel free to use it and modify it as you wish.