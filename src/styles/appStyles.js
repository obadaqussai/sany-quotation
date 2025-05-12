export const inputFieldStyle = { 
    width: "100%", 
    padding: "8px", 
    border: "1px solid #ddd", 
    borderRadius: "4px" 
  };
  
  export const inputGroupStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };
  
  export const productItemStyle = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "4px",
  };
  
  export const selectStyle = {
    flex: 2,
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  };
  
  export const inputNumberStyle = {
    flex: 1,
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    textAlign: "center",
  };
  
  export const addButtonStyle = {
    padding: "8px 15px",
    backgroundColor: "#e30613",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  };
  
  export const removeButtonStyle = {
    padding: "8px 12px",
    backgroundColor: "#ff4444",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  };
  
  export const buttonStyles = {
    primary: {
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#e30613",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      minWidth: "150px",
    },
    secondary: {
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      minWidth: "150px",
    },
    danger: {
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#666",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      minWidth: "150px",
    }
  };
  
  export const previewModalStyle = {
    position: "fixed", 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    backgroundColor: "rgba(0,0,0,0.9)", 
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
  export const closeButtonStyle = {
    position: "absolute", 
    top: "20px", 
    right: "20px", 
    background: "#e30613", 
    color: "white", 
    border: "none", 
    padding: "5px 12px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "18px",
  };
  
  export const appContainer = {
    padding: "20px", 
    maxWidth: "800px", 
    margin: "0 auto", 
    fontFamily: "Arial",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh"
  };
  
  export const appTitle = {
    color: "#e30613", 
    borderBottom: "2px solid #e30613", 
    paddingBottom: "10px",
    textAlign: "center"
  };
  
  export const appGrid = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr", // Two columns for larger screens
    },
  };
  
  export const formColumn = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    "@media (max-width: 768px)": {
      flexDirection: "column", // Stack items on smaller screens
    },
  };
  
  export const actionButtons = {
    display: "flex", 
    gap: "10px", 
    marginTop: "20px",
    flexWrap: "wrap",
    justifyContent: "center"
  };