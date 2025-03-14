# enigma

## Team Members
- mehedi132 (Team Leader)
- AKANIK35
- imnahmed17

## Mentor
- learnwithkawsar

**## Project Description
# AI-Powered Job Preparation Platform

![Project Status](https://img.shields.io/badge/status-in%20development-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

## Overview

The **AI-Powered Job Preparation Platform** is a web-based application designed to assist job seekers in Bangladesh with job preparation, interview practice, and skill evaluation. The platform integrates AI-driven features to provide personalized learning experiences, including job listings, study materials, mock interviews, and MCQ evaluations.

### Key Features

- **Job Listings & Preparation Materials**: Covers major job sectors like Software Engineering, Banking, Teaching, and Government jobs.
- **Topic-wise Study Materials & MCQs**: Includes Math, English, Analytical Reasoning, Databases, OOP, Data Structures, and General Knowledge.
- **AI-Powered Mock Interviews**: AI dynamically generates role-specific questions and adapts difficulty based on user performance.
- **AI-Driven MCQ Evaluation**: AI assesses MCQ performance and provides personalized improvement suggestions.
- **AI Chatbot for Mock Interviews**: Supports text or speech input with real-time feedback.
- **Live AI-Generated Mock Interviews**: Simulates real-world interviews with performance reports.

For detailed documentation, visit the [Project Wiki](https://github.com/Learnathon-By-Geeky-Solutions/enigma/wiki).

## Installation

### Prerequisites

- [.NET Core SDK](https://dotnet.microsoft.com/download) (version 6.0 or higher)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or [MongoDB](https://www.mongodb.com/try/download/community)
- [Node.js](https://nodejs.org/) (for frontend development, if using Blazor)
- A Speech-to-Text API key (e.g., Google Cloud Speech-to-Text)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

---

```markdown
## Installation

### Set Up the Backend

1. **Navigate to the Backend Directory**:
   ```bash
   cd backend
   ```

2. **Restore Dependencies**:
   ```bash
   dotnet restore
   ```

3. **Configure the Database**:
   - Update the database connection string in `appsettings.json` with your SQL Server or MongoDB details.

4. **Run Database Migrations** (if using SQL Server):
   ```bash
   dotnet ef database update
   ```

5. **Start the Backend Server**:
   ```bash
   dotnet run
   ```

### Set Up the Frontend

1. **Navigate to the Frontend Directory**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies** (if using Blazor or other frontend frameworks):
   ```bash
   npm install
   ```

3. **Start the Frontend Development Server**:
   ```bash
   npm start
   ```

### Configure AI Components

1. **Install ML.NET Dependencies**:
   - Add the necessary ML.NET packages to your project as needed.

2. **Set Up the Speech-to-Text API**:
   - Add your API key to the configuration file (e.g., `appsettings.json`).

### Run the Application

1. Ensure both the backend and frontend servers are running.
2. Access the application at `http://localhost:5000` (or the port specified in your configuration).

## Usage

### Access Job Listings

- Browse available job listings by sector (e.g., Software Engineering, Banking).

### Study Materials & MCQs

- Navigate to the study materials section to access topic-wise resources.
- Take MCQ tests and receive AI-generated feedback.

### Mock Interviews

- Select a job role to start an AI-driven mock interview.
- Respond to questions via text or speech.
- Review the AI-generated performance report after the session.

For detailed usage instructions, see the [User Experience & Interface](https://github.com/Learnathon-By-Geeky-Solutions/enigma/wiki/User-Experience-Interface) page in the Wiki.

## Project Structure

```
your-repo/
├── backend/              # Backend code (.NET Core)
├── frontend/             # Frontend code (ASP.NET Core MVC / Blazor)
├── docs/                 # Additional documentation (if any)
├── README.md             # This file
└── ...                   # Other files and directories
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add your feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

For detailed contribution guidelines, see the [Project Wiki](https://github.com/Learnathon-By-Geeky-Solutions/enigma/wiki).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please open an issue on the [GitHub Issues](https://github.com/Learnathon-By-Geeky-Solutions/enigma/issues) page or contact the maintainers at [your-email@example.com](mailto:mh20011999@gmail.com).

- [Project Documentation](docs/)
- [Development Setup](docs/setup.md)
- [Contributing Guidelines](CONTRIBUTING.md)
