const TabButton = ({ children, onClick: handleClick, isSelected }) => {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;
