import Button from '../Button/Button';
import './table.css';

const Table = () => {
  return (
    <table className="buttonTable">
      <thead>
        <tr>
          <th></th>
          <th>Disabled</th>
          <th>Idle</th>
          <th>Hovered</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="left-head" >Primary Button</td>
          <td className='button-table' ><Button text="Button" theme="primary" disabled /></td>
          <td className='button-table'><Button text="Button" theme="primary" /></td>
          <td className='button-table'><Button text="Button" theme="hoverPrimary" /></td>
        </tr>
        <tr>
          <td className="left-head">Primary Button <br/>(With Icon)</td>
          <td className='button-table'><Button text="Button" theme="primary" icon disabled /></td>
          <td className='button-table'><Button text="Button" theme="primary" icon /></td>
          <td className='button-table'><Button text="Button" theme="hoverPrimary" icon /></td>
        </tr>
        <tr>
          <td className="left-head">Primary Button <br/>(With Caret)</td>
          <td className='button-table'><Button text="Button" theme="primary" caret disabled /></td>
          <td className='button-table'><Button text="Button" theme="primary" caret /></td>
          <td className='button-table'><Button text="Button" theme="hoverPrimary" caret /></td>
        </tr>
        <tr>
          <td className="left-head">Secondary Button</td>
          <td className='button-table'><Button text="Button" theme="secondary" disabled /></td>
          <td className='button-table'><Button text="Button" theme="secondary" /></td>
          <td className='button-table'><Button text="Button" theme="hoverSecondary" /></td>
        </tr>
        <tr>
          <td className="left-head">Secondary Button <br/>(With Icon)</td>
          <td className='button-table'><Button text="Button" theme="secondary" icon disabled /></td>
          <td className='button-table'><Button text="Button" theme="secondary" icon /></td>
          <td className='button-table'><Button text="Button" theme="hoverSecondary" icon /></td>
        </tr>
        <tr>
          <td className="left-head">Secondary Button <br/>(With Caret)</td>
          <td><Button text="Button" theme="secondary" caret disabled /></td>
          <td><Button text="Button" theme="secondary" caret /></td>
          <td><Button text="Button" theme="hoverSecondary" caret /></td>
        </tr>
        
      </tbody>
    </table>
  );
};

export default Table;
