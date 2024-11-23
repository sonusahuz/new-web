const Drawer = ({ isOpen, setIsOpen, width = '250px', content }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`} style={{ width: width }}>
      <div className="drawer-content">
        <div className="drawer-slider">
          <h2 className="drawer-title">Nyas</h2>
          <i
            onClick={() => setIsOpen(false)}
            className="drawer-close bi bi-x-lg"
          />
        </div>
        <ul className="drawer-main" onClick={() => setIsOpen(false)}>
          {content}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
