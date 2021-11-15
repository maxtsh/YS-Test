import Table from "rsuite/Table";
import { observer } from "mobx-react-lite";
import Checkbox from "rsuite/Checkbox";
import IconButton from "rsuite/IconButton";
import CheckCell from "components/CheckCell";
import User from "./components/User";
import { Container } from "./styles";
import { BsTrash } from "react-icons/bs";
import UsersManager from "./UsersManager";

const Users: React.FC = () => {
  const {
    handleCheckAll,
    handleCheck,
    deleteUser,
    deleteAllUsers,
    checkedKeys,
    users,
  } = UsersManager();

  return (
    <Container>
      <div className="add-user">
        <User />
      </div>
      <Table
        loading={false}
        hover
        showHeader
        autoHeight
        data={users}
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
                  users.length > 0 && checkedKeys.length === users.length
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
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.Cell dataKey="firstName" />
        </Table.Column>
        <Table.Column width={200}>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.Cell dataKey="lastName" />
        </Table.Column>
        <Table.Column width={200}>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.Cell dataKey="email" />
        </Table.Column>
        <Table.Column width={200}>
          <Table.HeaderCell>Birthday</Table.HeaderCell>
          <Table.Cell dataKey="birthDay" />
        </Table.Column>
        <Table.Column width={120}>
          <Table.HeaderCell>
            {checkedKeys.length > 0 && (
              <IconButton
                appearance="subtle"
                onClick={() => deleteAllUsers(checkedKeys)}
                icon={<BsTrash size={20} color="#ff0000" />}
              />
            )}
          </Table.HeaderCell>
          <Table.Cell>
            {(rowData) => {
              return (
                <div className="table-actions">
                  <IconButton
                    appearance="subtle"
                    onClick={() => deleteUser(rowData["id"])}
                    icon={<BsTrash size={20} color="#ff0000" />}
                  />
                  <User userId={rowData["id"]} />
                </div>
              );
            }}
          </Table.Cell>
        </Table.Column>
      </Table>
    </Container>
  );
};

export default observer(Users);
