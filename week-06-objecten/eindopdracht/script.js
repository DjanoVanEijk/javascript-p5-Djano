const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

const showUsers = (users) => {
  const origineleLijst = users.map(({ name, email, role, active }) => {
    return `<article>
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>Role: ${role}</p>
      <p>Active: ${active}</p>
    </article>`;
  });

  document.getElementById('users').innerHTML = origineleLijst.join('');
};

const filterUsers = () => {
  let filteredUsers = users;

  if (filter === 'admin') {
    filteredUsers = users.filter((user) => user.role === 'admin');
  }

  showUsers(filteredUsers);
};

document.getElementById('filter-admin').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

document.getElementById('filter-all').addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

document.getElementById('user-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const role = document.getElementById('role').value;

  if (!name || !email) {
    return;
  }

  const defaultUser = {
    active: true,
  };

  const newUser = {
    ...defaultUser,
    name,
    email,
    role,
  };

  users.push(newUser);
  event.target.reset();
  filterUsers();
});

filterUsers();
