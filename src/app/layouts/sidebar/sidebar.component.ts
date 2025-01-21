import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';

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
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  menuGroups: MenuGroup[] = [
    {
      title: 'GENERAL',
      items: [
        {
          title: 'Dashboard',
          icon: 'pi pi-th-large',
          link: '/dashboard',
          isActive: true,
        },
        { title: 'Analytics', icon: 'pi pi-chart-line', link: '/analytics' },
        {
          title: 'Shop Analyzer',
          icon: 'pi pi-shopping-cart',
          link: '/shop-analyzer',
        },
        {
          title: 'Sales Report',
          icon: 'pi pi-file',
          link: '/sales-report',
        },
        {
          title: 'Transactions',
          icon: 'pi pi-sync',
          link: '/transactions',
        },
      ],
    },
    {
      title: 'OTHER TOOLS',
      items: [
        { title: 'Extensions', icon: 'pi pi-box', link: '/extensions' },
        {
          title: 'Affiliate Program',
          icon: 'pi pi-link',
          link: '/affiliate',
        },
        { title: 'Upgrade', icon: 'pi pi-star', link: '/upgrade' },
      ],
    },
    {
      title: 'SUPPORT',
      items: [
        { title: 'Settings', icon: 'pi pi-cog', link: '/settings' },
        { title: 'Help Center', icon: 'pi pi-question-circle', link: '/help' },
      ],
    },
  ];
}
