import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


export default function TodoList({todolist}) {
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (todo) => () => {
    const currentIndex = checked.indexOf(todo);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(todo);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todolist.map((todo) => {
        const labelId = `checkbox-list-label-${todo}`;

        return (
          <ListItem
            key={todo.id}
            style={{"width":"100vw"}}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(todo.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(todo.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText style={checked.includes(todo.id) ? {"textDecoration":"line-through"}:{}} id={labelId} primary={`${todo.value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}