# NURSERY APPLICATION

## Design Decisions

### Data Fetching and Pagination
- **Client-Side Pagination**: Due to the lack of server-side pagination support in the API, the application fetches all data at once and implements client-side pagination. This approach allows for a smoother user experience with infinite scrolling, as data is incrementally displayed as the user scrolls down.
- **PAGE_SIZE**: Set to 5 to balance between initial load performance and user interaction, minimizing wait times while ensuring a steady flow of new content during scrolling.

### Infinite Scrolling
- **Implementation**: Utilizes the Intersection Observer API for efficient, event-driven data loading, triggered when the user scrolls to the bottom of the current content.
- **Performance Considerations**: By dynamically loading content and unloading off-screen content, the application optimizes resource usage and maintains high performance, even with large datasets.

### Error Handling
- Describes how errors from the API (e.g., network issues or data fetching errors) are handled and communicated to the user, ensuring a robust user experience.

## Setup Instructions

1. **Clone the Repository**
- git clone https://github.com/lebaschi/nursery-app.git
- cd nursery-app


2. **Install Dependencies**
- Ensure you have Node.js installed.
- Run `npm install` to install the project dependencies.

3. **Configuration**
- Create a `.env` file in the root directory.
- Add the following line, replacing `YOUR_ACCESS_TOKEN` with your actual access token:
  ```
  REACT_APP_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
  ```

4. **Running the Application**
- Start the application with `npm start`. This will run the app in development mode, accessible at `http://localhost:3000`.

5. **Building for Production**
- To build the app for production, run `npm run build`. This optimizes the build for the best performance.





