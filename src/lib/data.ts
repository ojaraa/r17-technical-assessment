export const navLinks = [
  { 
    id: 1,
    title: "Dashboard", 
    href: "/" 
},
  {
    id: 2,
    title: "Transactions",
    href: "/transactions",
  },
   {
    id: 4,
    title: "Reports",
    href: "/reports",
  },
  {
    id: 3,
    title: "Settings",
    href: "/settings",
  },
 
];



interface User {
    id: number;
  firstName: string;
    lastName: string;
  avatar: string;
}

export const users: User[] = [
  { id: 1, firstName: "Alice", lastName: "Johnson", avatar: "/assets/images/avatar.png" },
  { id: 2, firstName: "Bob", lastName: "Smith", avatar: "/assets/images/avatar1.jpg" },
  { id: 3, firstName: "Charlie", lastName: "Davis", avatar: "/assets/images/avatar3.jpg" },
  { id: 4, firstName: "Dana", lastName: "Lee", avatar: "/assets/images/avatar1.jpg" },
  { id: 5, firstName: "Evan", lastName: "White", avatar: "/assets/images/avatar2.jpg" },
  { id: 6, firstName: "Fiona", lastName: "Clark", avatar: "/assets/images/avatar3.jpg" },
  { id: 7, firstName: "George", lastName: "Brown", avatar: "/assets/images/avatar1.jpg" },
  { id: 8, firstName: "Hannah", lastName: "Scott", avatar: "/assets/images/avatar2.jpg" },
  { id: 9, firstName: "Ian", lastName: "Turner", avatar: "/assets/images/avatar3.jpg" },
  { id: 10, firstName: "Julia", lastName: "Adams", avatar: "/assets/images/avatar1.jpg" },
  { id: 11, firstName: "Kevin", lastName: "Martinez", avatar: "/assets/images/avatar2.jpg" },
  { id: 12, firstName: "Laura", lastName: "Evans", avatar: "/assets/images/avatar3.jpg" },
  { id: 13, firstName: "Michael", lastName: "Wilson", avatar: "/assets/images/avatar1.jpg" },
  { id: 14, firstName: "Nina", lastName: "Thompson", avatar: "/assets/images/avatar2.jpg" },
  { id: 15, firstName: "Oscar", lastName: "Hughes", avatar: "/assets/images/avatar3.jpg" },
];

