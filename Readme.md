# Course Selection Simulator

This is a web application designed to simulate the course selection process for CUFE Dry Run. It features a responsive and dynamic course grid system built using PHP, JavaScript, and CSS.

## Features

- **Dynamic Course Management:**  
  Courses are fetched from a database, inserted into a JSON file via PHP, and dynamically rendered using JavaScript.

- **Grid-Based Layout:**  
  Courses are displayed in an organized grid structure, utilizing CSS Grid for precise placement and alignment.

- **Real-Time Interaction:**  
  Users can interact with the grid to select or deselect courses. JavaScript handles all updates in real time.

- **Flexible Customization:**  
  The table is fully responsive and can be dynamically edited or expanded to include additional courses or categories.

## Challenges Overcome

- **Dynamic Course Placement:**  
  One of the core challenges was correctly assigning each course to its designated position in the grid. This was solved using advanced JavaScript logic and CSS Grid features.

- **Responsiveness Enhancements:**  
  Making the application adaptable to various screen sizes required iterative testing and fine-tuning.

- **Course Selection Handling:**  
  Developing an intuitive and user-friendly mechanism for selecting courses and managing conflicts or prerequisites was a key focus.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** PHP  
- **Database:** MySQL
- **Data Exchange Format:** JSON  

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/MohanedM7md/CUFE_DryRun.git
   ```
2. Set up the database:


4. Start the server:
   - If using XAMPP or WAMP, place the project folder in the `htdocs` directory.
   - Open your browser and navigate to `http://localhost/course-selection-simulator`.

## How It Works

1. **Database Interaction:**  
   PHP retrieves course data from the database and converts it into a JSON format.

2. **Dynamic Rendering:**  
   JavaScript reads the JSON file, processes the data, and assigns each course to its respective position in the CSS Grid layout.

3. **Selection Mechanism:**  
   Users can interact with the grid to select courses. JavaScript ensures the chosen courses adhere to predefined rules (e.g., prerequisites or time conflicts).

## Roadmap

- Improve responsiveness for smaller devices.
- Enhance course selection handling, including support for prerequisites and conflict warnings.
- Add drag-and-drop functionality for a more interactive experience.
- Develop an admin panel for easier course management.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

---

