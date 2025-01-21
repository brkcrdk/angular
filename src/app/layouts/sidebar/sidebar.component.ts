import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  LayoutGrid,
  LineChart,
  ShoppingCart,
  FileText,
  RefreshCcw,
  Puzzle,
  Link2,
  Star,
  Settings,
  HelpCircle,
  Chrome,
} from 'lucide-angular';

interface MenuItem {
  title: string;
  icon: any; // Lucide icon component
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
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    LayoutGrid,
    LineChart,
    ShoppingCart,
    FileText,
    RefreshCcw,
    Puzzle,
    Link2,
    Star,
    Settings,
    HelpCircle,
    Chrome,
  ],
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
          icon: LayoutGrid,
          link: '/dashboard',
          isActive: true,
        },
        { title: 'Analytics', icon: LineChart, link: '/analytics' },
        { title: 'Shop Analyzer', icon: ShoppingCart, link: '/shop-analyzer' },
        { title: 'Sales Report', icon: FileText, link: '/sales-report' },
        { title: 'Transactions', icon: RefreshCcw, link: '/transactions' },
      ],
    },
    {
      title: 'OTHER TOOLS',
      items: [
        { title: 'Extensions', icon: Puzzle, link: '/extensions' },
        { title: 'Affiliate Program', icon: Link2, link: '/affiliate' },
        { title: 'Upgrade', icon: Star, link: '/upgrade' },
      ],
    },
    {
      title: 'SUPPORT',
      items: [
        { title: 'Settings', icon: Settings, link: '/settings' },
        { title: 'Help Center', icon: HelpCircle, link: '/help' },
      ],
    },
  ];
}
