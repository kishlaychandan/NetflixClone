# 📽️ Netflix

A **React-based movie browsing application** that allows users to **search, explore, and view** details of movies. It also provides **user authentication** for protected access and leverages **multiple APIs** to fetch popular, top-rated, and upcoming movies.

---

## 🌐 Live Demo

Check out the live version of the project:  
[Netflix Clone on Vercel](https://netflix-iota-sooty.vercel.app/)

---

## 🚀 Features

- **User Authentication**: Login and signup functionality.
- **Browse Movies**: Explore movies by category – Now Playing, Popular, Upcoming, and Top Rated.
- **Search Functionality**: Users can search for movies by name.
- **Protected Routes**: Users need to log in to access the Browse page.
- **Redux for State Management**: Manage user and movie states effectively.
- **Responsive Design**: Mobile-friendly layout with clean UI.
- **FAQ Section**: Provide quick answers to common questions.
- **Footer Component**: Include quick links and app info.

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **API**: TMDB API for movies
- **Authentication**: Axios + JWT (backend required)
- **Notifications**: `react-hot-toast`

---


## 🔍 API Endpoints

### 🎬 **TMDB Movie APIs**

1. **Now Playing Movies**  
   **GET**:  
   [https://api.themoviedb.org/3/movie/now_playing](https://api.themoviedb.org/3/movie/now_playing)

2. **Popular Movies**  
   **GET**:  
   [https://api.themoviedb.org/3/movie/popular](https://api.themoviedb.org/3/movie/popular)

3. **Top Rated Movies**  
   **GET**:  
   [https://api.themoviedb.org/3/movie/top_rated](https://api.themoviedb.org/3/movie/top_rated)

4. **Upcoming Movies**  
   **GET**:  
   [https://api.themoviedb.org/3/movie/upcoming](https://api.themoviedb.org/3/movie/upcoming)

5. **Search Movies**  
   **GET**:  
   [https://api.themoviedb.org/3/search/movie?query={movie_name}](https://api.themoviedb.org/3/search/movie?query={movie_name})

6. **Movie Poster URL**  
   **Base URL for Posters**:  
   [https://image.tmdb.org/t/p/w500](https://image.tmdb.org/t/p/w500)

➡️ For more details on TMDB API, visit the [TMDB API Documentation](https://developers.themoviedb.org/3/getting-started/introduction).

---

### 🔑 **Backend API (User Authentication)**

1. **Login User**  
   **POST**:  
   [https://netflixclone-5hqh.onrender.com/api/v1/user/login](https://netflixclone-5hqh.onrender.com/api/v1/user/login)  
   **Request Body**:
   ```json
   {
     "email": "user@example.com",
     "password": "password123"
   }
   ```
2. **Register User**  
    **POST**:  
    [https://netflixclone-5hqh.onrender.com/api/v1/user/register](https://netflixclone-5hqh.onrender.com/api/v1/user/register)  
    **Request Body**:
   ```json
   {
     "fullName": "John Doe",
     "email": "user@example.com",
     "password": "password123"
   }
   ```

---

## ⚙️ Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kishlaychandan/NetflixClone
   cd netflix
   npm install
   ```
