import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

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
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  menuGroups: MenuGroup[] = [
    {
      title: 'GENERAL',
      items: [
        {
          title: 'Dashboard',
          icon: 'lucide-layout-grid',
          link: '/dashboard',
          isActive: true,
        },
        { title: 'Analytics', icon: 'lucide-line-chart', link: '/analytics' },
        {
          title: 'Shop Analyzer',
          icon: 'lucide-shopping-cart',
          link: '/shop-analyzer',
        },
        {
          title: 'Sales Report',
          icon: 'lucide-file-text',
          link: '/sales-report',
        },
        {
          title: 'Transactions',
          icon: 'lucide-refresh-ccw',
          link: '/transactions',
        },
      ],
    },
    {
      title: 'OTHER TOOLS',
      items: [
        { title: 'Extensions', icon: 'lucide-puzzle', link: '/extensions' },
        { title: 'Affiliate Program', icon: 'lucide-link', link: '/affiliate' },
        { title: 'Upgrade', icon: 'lucide-star', link: '/upgrade' },
      ],
    },
    {
      title: 'SUPPORT',
      items: [
        { title: 'Settings', icon: 'lucide-settings', link: '/settings' },
        { title: 'Help Center', icon: 'lucide-help-circle', link: '/help' },
      ],
    },
  ];
}
