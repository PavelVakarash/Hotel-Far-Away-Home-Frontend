import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { selectUsers } from './selectors';
import { deleteUser, loadUsers } from './usersSlice';

export default function Users(): JSX.Element {
  const users = useSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  return (
    <>
      <div>Users</div>
      <div>
        {users.map((el) => (
          <div key={el.id}>
            {el.id}
            <p>{el.firstName}</p>
            <p>{el.lasName}</p>
            <p>{el.phone}</p>
            <button type="button" onClick={() => dispatch(deleteUser(el.id))}>
              Delete user
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
