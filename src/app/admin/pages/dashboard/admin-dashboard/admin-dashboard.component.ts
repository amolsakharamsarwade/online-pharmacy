import {Component, OnInit} from '@angular/core';
import {ChartConfiguration} from "chart.js";
import {DashboardService} from "../../../../shared/services/dashboard.service";
import _default from "chart.js/dist/core/core.interaction";
import dataset = _default.modes.dataset;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  // Summary cards
  totalSales = 0;
  totalOrders = 0;
  customerCount = 0;

  // Chart data
  salesChartData!: ChartConfiguration<'line'>['data'];
  paymentChartData!: ChartConfiguration<'pie'>['data'];
  lowStockChartData!: ChartConfiguration<'bar'>['data'];
  deliveryStatusChartData!: ChartConfiguration<'pie'>['data'];

  // Top-selling products table
  topProducts: any[] = [];

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {position: 'top'}
    }
  };

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    // Summary cards
    this.dashboardService.getSummary().subscribe(data => {
      this.totalSales = data.totalSales;
      this.totalOrders = data.totalOrders;
      this.customerCount = data.customerCount;
    });

    // Sales Trend
    this.dashboardService.getSalesTrend().subscribe(data => {
      this.salesChartData = {
        labels: data.labels,
        datasets: [
          {data: data.data, label: 'Sales'}
        ]
      };
    });

    // Orders by Payment Method
    this.dashboardService.getOrdersByPayment().subscribe(data => {
      this.paymentChartData = {
        labels: data.labels,
        datasets: [{
          data: data.data,
          backgroundColor: ['#f6c23e', '#4e73df', '#1cc88a']
          // Yellow, Blue, Green
        }]
      };
    });

    // Orders by Delivery Status
    this.dashboardService.getDeliveryStatus().subscribe(data => {
      this.deliveryStatusChartData = {
        labels: data.labels,
        datasets: [{
          data: data.data,
          backgroundColor: ['#fd7e14', '#0d6efd', '#198754', '#dc3545']
          // Orange, Blue, Green, Red
        }]
      };
    });

    // Low Stock Items
    this.dashboardService.getLowStockItems().subscribe(data => {
      // Low stock items (bar chart)
      this.lowStockChartData = {
        labels: data.labels,
        datasets: [
          { data: data.data, label: 'Stock Left' }
        ]
      };
    });

    // Top-selling products
    this.dashboardService.getTopProducts().subscribe(data => {
      this.topProducts = data;
    });
  }
}
