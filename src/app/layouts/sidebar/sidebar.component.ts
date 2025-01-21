import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { LucideAngularModule, icons } from 'lucide-angular';

interface MenuItem {
  title: string;
  icon: keyof typeof icons;
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
  imports: [RouterLink, RouterLinkActive, NgFor, LucideAngularModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  menuGroups: MenuGroup[] = [
    {
      title: 'GENERAL',
      items: [
        {
          title: 'Dashboard',
          icon: 'LayoutGrid',
          link: '/dashboard',
          isActive: true,
        },
        { title: 'Analytics', icon: 'TrendingUp', link: '/analytics' },
        {
          title: 'Shop Analyzer',
          icon: 'ShoppingCart',
          link: '/shop-analyzer',
        },
        {
          title: 'Sales Report',
          icon: 'FileText',
          link: '/sales-report',
        },
        {
          title: 'Transactions',
          icon: 'RefreshCcw',
          link: '/transactions',
        },
      ],
    },
    {
      title: 'OTHER TOOLS',
      items: [
        { title: 'Extensions', icon: 'Puzzle', link: '/extensions' },
        {
          title: 'Affiliate Program',
          icon: 'Link2',
          link: '/affiliate',
        },
        { title: 'Upgrade', icon: 'Star', link: '/upgrade' },
      ],
    },
    {
      title: 'SUPPORT',
      items: [
        { title: 'Settings', icon: 'Settings', link: '/settings' },
        { title: 'CircleHelp', icon: 'CircleHelp', link: '/help' },
      ],
    },
  ];
}
