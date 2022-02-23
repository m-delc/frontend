npx create-react-app my-app
cd my-app
npm start

npm install react-router-dom@6
npm install --save-dev --save-exact prettier
npm install @reduxjs/toolkit
npm install @mui/material @emotion/react @emotion/styled @material-ui/icons

Add to package.json:
    
    "proxy": "http://localhost:3000"
    
    and under "scripts": 
        "start": "PORT=4000 react-scripts start"