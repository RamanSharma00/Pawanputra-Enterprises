export interface Project {
  id: number;
  sNo: number | string;
  client: string;
  description: string;
  type: string;
  valueNumeric: number; // Value in Lakhs
  valueFormatted: string; // e.g. "₹29.50 Crore" or "₹92.61 Lakh"
  year: string;
  status: 'Completed' | 'Work In Progress' | 'Supply' | 'Transportation' | 'Running';
}

export interface GalleryItem {
  id: number;
  row: number;
  title: string;
  image: string;
  category: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatarType: 'pagadi' | 'suit' | 'white_shirt';
  imageUrl: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  iconName: string;
}

export interface MachineryItem {
  name: string;
  description: string;
  iconName: string;
}

export interface SupportTicket {
  id: string;
  subject: string;
  category: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  createdAt: string;
}

export interface OnlineInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  status: 'New' | 'Contacted' | 'Closed';
  createdAt: string;
}
