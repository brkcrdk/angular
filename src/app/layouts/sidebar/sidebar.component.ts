import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  title: string;
  icon: string;
  link: string;
  isActive?: boolean;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuGroups: MenuGroup[] = [
    {
      title: 'GENERAL',
      items: [
        {
          title: 'Dashboard',
          icon: 'grid',
          link: '/dashboard',
          isActive: true,
        },
        { title: 'Analytics', icon: 'analytics', link: '/analytics' },
        { title: 'Shop Analyzer', icon: 'shop', link: '/shop-analyzer' },
        { title: 'Sales Report', icon: 'report', link: '/sales-report' },
        { title: 'Transactions', icon: 'transactions', link: '/transactions' },
      ],
    },
    {
      title: 'OTHER TOOLS',
      items: [
        { title: 'Extensions', icon: 'puzzle', link: '/extensions' },
        { title: 'Affiliate Program', icon: 'link', link: '/affiliate' },
        { title: 'Upgrade', icon: 'star', link: '/upgrade' },
      ],
    },
    {
      title: 'SUPPORT',
      items: [
        { title: 'Settings', icon: 'settings', link: '/settings' },
        { title: 'Help Center', icon: 'help', link: '/help' },
      ],
    },
  ];
}
