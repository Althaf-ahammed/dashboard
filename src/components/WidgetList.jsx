import PropTypes from 'prop-types';
import Widget from './Widget';

const WidgetList = ({ widgets, removeWidget }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {widgets.map((widget) => (
        <Widget
          key={widget.id}
          id={widget.id}
          title={widget.name}
          text={widget.text}
          removeWidget={() => removeWidget(widget.id)}
        />
      ))}
    </div>
  );
};

WidgetList.propTypes = {
  widgets: PropTypes.array.isRequired,
  removeWidget: PropTypes.func.isRequired,
};

export default WidgetList;
