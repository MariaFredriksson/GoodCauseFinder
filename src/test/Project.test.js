// import { render, screen } from "@testing-library/react";
// import { useParams } from "react-router-dom";
// import Project from "./Project";

// jest.mock("react-router-dom", () => ({
//   useParams: jest.fn(),
// }));

// jest.mock("./useFetch", () => ({
//   __esModule: true,
//   default: jest.fn(),
// }));

// describe("Project component", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test("renders project details when data is available", async () => {
//     const testData = {
//       title: "Test Project",
//       description: "This is a test project",
//       organization: "Test Organization",
//     };
//     useParams.mockReturnValue({ id: "123" });
//     require("./useFetch").default.mockReturnValue({ data: testData });

//     render(<Project />);

//     const projectTitle = screen.getByText(testData.title);
//     const projectDescription = screen.getByText(testData.description);
//     const projectOrg = screen.getByText(testData.organization);
//     const supportButton = screen.getByText("Support this project");

//     expect(projectTitle).toBeInTheDocument();
//     expect(projectDescription).toBeInTheDocument();
//     expect(projectOrg).toBeInTheDocument();
//     expect(supportButton).toBeInTheDocument();
//   });

//   test("does not render project details when data is unavailable", async () => {
//     useParams.mockReturnValue({ id: "123" });
//     require("./useFetch").default.mockReturnValue({ data: null });

//     render(<Project />);

//     const projectTitle = screen.queryByText("Test Project");
//     const projectDescription = screen.queryByText("This is a test project");
//     const projectOrg = screen.queryByText("Test Organization");
//     const supportButton = screen.queryByText("Support this project");

//     expect(projectTitle).toBeNull();
//     expect(projectDescription).toBeNull();
//     expect(projectOrg).toBeNull();
//     expect(supportButton).toBeNull();
//   });
// });
