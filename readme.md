# Portfolio Website

This is an online resume and portfolio website designed to help you showcase your skills, experience, and projects effectively. The original design and code for this site were created by [Ade-mir] and have been forked for personal use, with all credit to the original creator.

This portfolio website provides a simple and modern way to present yourself to potential employers, collaborators, or clients. You can display your resume, personal projects, and skill sets in an interactive format, helping visitors understand your expertise at a glance.

## Features

- **Customizable Data**: Easily edit the content, such as your name, bio, skills, projects, and more, by updating the `data.json` file. Replace "John Doe" with your own name and relevant details.
- **Responsive Design**: The website layout adjusts smoothly across devices, providing a professional appearance on desktops, tablets, and mobile devices.
- **LinkedIn Integration**: Once configured, you can feature this site on your LinkedIn profile, allowing recruiters to explore your work directly from your profile.
- **Project and Skill Showcase**: Highlight key technical skills and display project showcases in an easy-to-read, accessible format.

## Installation

1. **Clone the Repository**  
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Project Directory**  
   ```bash
   cd portfolio-website
   ```

3. **Run the Website**  
   - **Using Live Server**: Open the project in a code editor and start a local server using Live Server.
   - **Alternative Methods**: Use any other method you prefer to host or view the website locally.

4. **Edit Details**  
   - Open `data.json` in a text editor.
   - Customize the details (e.g., name, job title, bio, skills, projects).
   
5. **Add to LinkedIn (Optional)**  
   - Once the website is live, add the link to your LinkedIn profile in the "Featured" section.

## Deploying on GitHub Pages

GitHub Pages is an easy way to host your portfolio for free! Here’s how to set it up:

1. **Push Your Code to GitHub**  
   - Make sure your project is on GitHub by pushing it to a new or existing repository.
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
   Replace `main` with your branch name if you’re using a different branch.

2. **Configure GitHub Pages**  
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages** in the sidebar.
   - In the **Source** section, select the `main` branch and, if required, choose the `/root` folder (not `/docs` unless your files are in a `docs` folder).
   - Click **Save**. GitHub will automatically generate a URL for your website, typically in the format `https://your-username.github.io/repository-name`.

3. **Wait for Deployment**  
   - GitHub Pages will take a few moments to deploy your website. You can check the status at the top of the **Pages** settings page, where a green message will appear once it’s live.

4. **Access Your Site**  
   - Visit the URL provided by GitHub Pages to view your live portfolio website!

## Pros and Cons

### Pros
- **Professional Presentation**: This site offers a visually appealing way to present your resume and projects, helping you stand out.
- **Customizable and Adaptable**: Easy to update without deep technical knowledge; just edit a JSON file to update content.
- **Portfolio at a Glance**: Viewers can quickly see your key projects, skills, and experience, making it ideal for quick reviews.
- **Responsive Design**: Looks great on any device, ensuring accessibility for viewers on different platforms.

### Cons
- **Limited Customization for Non-Developers**: Users without web development experience may find it challenging to make more advanced customizations.
- **Requires Hosting for Full Deployment**: While easy to view locally, you’ll need to host the site on a platform (e.g., GitHub Pages, Netlify) to make it accessible online.
- **Static Content**: Content updates require manual edits, as it lacks a built-in CMS for live updates.

## How to Use

1. **Edit Content**: Open `data.json` to update your name, skills, projects, and other information.
2. **Preview Changes**: Use Live Server or another local server to preview changes.
3. **Deploy Online**: Once you’re satisfied with your content, deploy the site to GitHub Pages, Netlify, or any other hosting platform.

## License and Credits

This project is forked from [Ade-mir](link). All credit for the design and base code goes to them. Feel free to customize it for personal use and showcase your work, but please give credit to the original creator if you share it publicly.

!