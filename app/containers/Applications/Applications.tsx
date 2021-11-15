import Table from "rsuite/Table";
import { observer } from "mobx-react-lite";
import Checkbox from "rsuite/Checkbox";
import IconButton from "rsuite/IconButton";
import CheckCell from "components/CheckCell";
import Apps from "./components/Apps";
import { Container } from "./styles";
import { BsTrash } from "react-icons/bs";
import AppManager from "./AppManager";

const Applications: React.FC = () => {
  const {
    deleteApp,
    deleteAllApps,
    handleCheck,
    handleCheckAll,
    checkedKeys,
    apps,
  } = AppManager();

  return (
    <Container>
      <div className="add-user">
        <Apps />
      </div>
      <Table
        loading={false}
        hover
        showHeader
        autoHeight
        data={apps}
        bordered
        cellBordered
        headerHeight={60}
        rowHeight={90}
      >
        <Table.Column width={50} align="center">
          <Table.HeaderCell style={{ padding: 0 }}>
            <div style={{ lineHeight: "40px" }}>
              <Checkbox
                inline
                checked={apps.length > 0 && checkedKeys.length === apps.length}
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
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.Cell dataKey="name" />
        </Table.Column>
        <Table.Column width={100}>
          <Table.HeaderCell>Thumbnail</Table.HeaderCell>
          <Table.Cell dataKey="thumbnail">
            {(rowData) => {
              return (
                <div className="thumbnail">
                  {rowData["thumbnail"] && (
                    <img
                      className="thumbnail-image"
                      src={rowData["thumbnail"]}
                      alt="app-image"
                    />
                  )}
                </div>
              );
            }}
          </Table.Cell>
        </Table.Column>
        <Table.Column width={120}>
          <Table.HeaderCell>
            {checkedKeys.length > 0 && (
              <IconButton
                appearance="subtle"
                onClick={() => deleteAllApps(checkedKeys)}
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
                    onClick={() => deleteApp(rowData["id"])}
                    icon={<BsTrash size={20} color="#ff0000" />}
                  />
                  <Apps appId={rowData["id"]} />
                </div>
              );
            }}
          </Table.Cell>
        </Table.Column>
      </Table>
    </Container>
  );
};

export default observer(Applications);
