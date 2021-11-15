import Table from "rsuite/Table";
import { observer } from "mobx-react-lite";
import Checkbox from "rsuite/Checkbox";
import IconButton from "rsuite/IconButton";
import CheckCell from "components/CheckCell";
import Badge from "rsuite/Badge";
import Own from "./components/Own";
import { Container } from "./styles";
import { BsCheckLg, BsScissors, BsTrash } from "react-icons/bs";
import OwnerShipmanager from "./OwnerShipManager";

const Ownerships: React.FC = () => {
  const {
    deleteAllOwnerships,
    grantOwnership,
    revokeOwnership,
    handleCheckAll,
    handleCheck,
    ownerships,
    checkedKeys,
    newOwnershipData,
  } = OwnerShipmanager();

  return (
    <Container>
      <div className="add-user">
        <Own />
      </div>
      <Table
        loading={false}
        hover
        showHeader
        autoHeight
        data={newOwnershipData}
        bordered
        cellBordered
        headerHeight={60}
        rowHeight={70}
      >
        <Table.Column width={50} align="center">
          <Table.HeaderCell style={{ padding: 0 }}>
            <div style={{ lineHeight: "40px" }}>
              <Checkbox
                inline
                checked={
                  ownerships.length > 0 &&
                  checkedKeys.length === ownerships.length
                }
                indeterminate={false}
                onChange={handleCheckAll}
              />
            </div>
          </Table.HeaderCell>
          <CheckCell
            dataKey="id"
            checkedKeys={checkedKeys}
            onChange={handleCheck}
          />
        </Table.Column>
        <Table.Column width={200} align="center">
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.Cell dataKey="id" />
        </Table.Column>
        <Table.Column width={200}>
          <Table.HeaderCell>App</Table.HeaderCell>
          <Table.Cell dataKey="appId" />
        </Table.Column>
        <Table.Column width={200}>
          <Table.HeaderCell>User</Table.HeaderCell>
          <Table.Cell dataKey="userId" />
        </Table.Column>
        <Table.Column width={200}>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.Cell dataKey="status">
            {(rowData) => {
              return (
                <Badge
                  style={{ padding: "0.5rem", borderRadius: "8px" }}
                  color={rowData["status"] === "Owned" ? "green" : "red"}
                  content={rowData["status"]}
                />
              );
            }}
          </Table.Cell>
        </Table.Column>
        <Table.Column width={200}>
          <Table.HeaderCell>Register Date</Table.HeaderCell>
          <Table.Cell dataKey="registerDate" />
        </Table.Column>
        <Table.Column width={120}>
          <Table.HeaderCell>
            Actions
            {checkedKeys.length > 0 && (
              <IconButton
                appearance="subtle"
                onClick={() => deleteAllOwnerships(checkedKeys)}
                icon={<BsTrash size={20} color="#ff0000" />}
              />
            )}
          </Table.HeaderCell>
          <Table.Cell>
            {(rowData) => {
              return (
                <div className="table-actions">
                  {rowData["status"] === "Owned" ? (
                    <IconButton
                      appearance="subtle"
                      onClick={() => revokeOwnership(rowData["id"])}
                      icon={<BsScissors size={20} color="#ff0000" />}
                    />
                  ) : (
                    <IconButton
                      appearance="subtle"
                      onClick={() => grantOwnership(rowData["id"])}
                      icon={<BsCheckLg size={20} color="#3498ff" />}
                    />
                  )}
                  <Own ownerId={rowData["id"]} />
                </div>
              );
            }}
          </Table.Cell>
        </Table.Column>
      </Table>
    </Container>
  );
};

export default observer(Ownerships);
