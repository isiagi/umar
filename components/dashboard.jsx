"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  MoreHorizontal,
  Package,
  ShoppingBag,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Mock data for orders
const initialOrders = [
  {
    id: 1,
    customer: "John Doe",
    items: "Burger, Fries",
    total: 15.99,
    status: "Preparing",
  },
  {
    id: 2,
    customer: "Jane Smith",
    items: "Pizza, Salad",
    total: 22.5,
    status: "Ready",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    items: "Steak, Mashed Potatoes",
    total: 35.0,
    status: "Delivered",
  },
  {
    id: 4,
    customer: "Alice Brown",
    items: "Sushi Platter",
    total: 45.0,
    status: "Preparing",
  },
  {
    id: 5,
    customer: "Charlie Davis",
    items: "Pasta, Garlic Bread",
    total: 18.75,
    status: "Ready",
  },
  {
    id: 6,
    customer: "Eva Wilson",
    items: "Chicken Curry, Naan",
    total: 28.5,
    status: "Preparing",
  },
  {
    id: 7,
    customer: "Frank Miller",
    items: "Fish and Chips",
    total: 16.99,
    status: "Ready",
  },
  {
    id: 8,
    customer: "Grace Lee",
    items: "Vegetarian Platter",
    total: 22.0,
    status: "Delivered",
  },
  {
    id: 9,
    customer: "Henry Taylor",
    items: "BBQ Ribs, Coleslaw",
    total: 32.5,
    status: "Preparing",
  },
  {
    id: 10,
    customer: "Ivy Chen",
    items: "Pho, Spring Rolls",
    total: 19.75,
    status: "Ready",
  },
  {
    id: 11,
    customer: "Jack Brown",
    items: "Lasagna, Garlic Bread",
    total: 21.5,
    status: "Delivered",
  },
  {
    id: 12,
    customer: "Kelly White",
    items: "Caesar Salad, Soup",
    total: 14.99,
    status: "Preparing",
  },
  {
    id: 13,
    customer: "Liam Harris",
    items: "Stir Fry, Dumplings",
    total: 25.0,
    status: "Ready",
  },
  {
    id: 14,
    customer: "Mia Johnson",
    items: "Fajitas, Guacamole",
    total: 29.99,
    status: "Delivered",
  },
  {
    id: 15,
    customer: "Noah Davis",
    items: "Margherita Pizza",
    total: 17.5,
    status: "Preparing",
  },
];

export function DashboardComponent() {
  const [orders, setOrders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const changeOrderStatus = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    toast({
      title: "Order Status Updated",
      description: `Order #${orderId} status changed to ${newStatus}`,
    });
  };

  const cancelOrder = (orderId) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: "Cancelled" } : order
      )
    );
    toast({
      title: "Order Cancelled",
      description: `Order #${orderId} has been cancelled`,
      variant: "destructive",
    });
  };

  const deleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
    toast({
      title: "Order Deleted",
      description: `Order #${orderId} has been deleted from the system`,
      variant: "destructive",
    });
  };

  return (
    <div className="container mx-auto px-4 pt-[10vh] pb-10 md:pt-[15vh]">
      <h1 className="mb-6 text-3xl font-bold">
        {" "}
        Umar Chicken Master Admin Dashboard
      </h1>
      {/* Summary Cards */}
      <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234.56</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">+10% from last hour</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tables</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">3 tables available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Orders
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 orders preparing</p>
          </CardContent>
        </Card>
      </div>
      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "Delivered" ? "secondary" : "default"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onSelect={() =>
                            changeOrderStatus(order.id, "Preparing")
                          }
                        >
                          Mark as Preparing
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() => changeOrderStatus(order.id, "Ready")}
                        >
                          Mark as Ready
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() =>
                            changeOrderStatus(order.id, "Delivered")
                          }
                        >
                          Mark as Delivered
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onSelect={() => cancelOrder(order.id)}
                          className="text-red-600"
                        >
                          Cancel Order
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() => deleteOrder(order.id)}
                          className="text-red-600"
                        >
                          Delete Order
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* Pagination */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {indexOfFirstOrder + 1} to{" "}
              {Math.min(indexOfLastOrder, filteredOrders.length)} of{" "}
              {filteredOrders.length} orders
            </p>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
