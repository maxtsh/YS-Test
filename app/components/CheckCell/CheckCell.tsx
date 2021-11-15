import Table from "rsuite/Table";
import Checkbox from "rsuite/Checkbox";

interface CheckCellProps {
  onChange?:
    | ((
        value: any,
        checked: boolean,
        event: React.ChangeEvent<HTMLInputElement>
      ) => void)
    | undefined;
  checkedKeys: string[];
  dataKey: string;
}
const CheckCell: React.FC<CheckCellProps> = ({
  onChange,
  checkedKeys,
  dataKey,
  ...props
}) => (
  <Table.Cell {...props} style={{ padding: 0 }}>
    {(rowData) => (
      <div style={{ lineHeight: "46px" }}>
        <Checkbox
          value={rowData[dataKey]}
          inline
          onChange={onChange}
          checked={checkedKeys.some((item) => item === rowData[dataKey])}
        />
      </div>
    )}
  </Table.Cell>
);
export default CheckCell;
