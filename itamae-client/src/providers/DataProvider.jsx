import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [chefData, setChefData] = useState([]);

  const data = {
    chefData,
    setChefData,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
