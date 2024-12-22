import pygame
import sys
import heapq

# Constants
grid_size = 100
cell_size = 8
width = grid_size * cell_size
height = grid_size * cell_size
white = (255, 255, 255)
black = (0, 0, 0)
gray = (200, 200, 200)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)

# Initialize pygame
pygame.init()

screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Dijkstra's Algorithm Visualizer")

# Initialize grid
grid = [[0 for _ in range(grid_size)] for _ in range(grid_size)]

start = None
end = None
dragging_block = False

def draw_grid():
    screen.fill(white)
    for x in range(0, width, cell_size):
        pygame.draw.line(screen, gray, (x, 0), (x, height))
    for y in range(0, height, cell_size):
        pygame.draw.line(screen, gray, (0, y), (width, y))

    for row in range(grid_size):
        for col in range(grid_size):
            if grid[row][col] == 1:  # Blockage
                pygame.draw.rect(screen, black, (col * cell_size, row * cell_size, cell_size, cell_size))
            elif grid[row][col] == 2:  # Start point
                pygame.draw.rect(screen, green, (col * cell_size, row * cell_size, cell_size, cell_size))
            elif grid[row][col] == 3:  # End point
                pygame.draw.rect(screen, red, (col * cell_size, row * cell_size, cell_size, cell_size))
            elif grid[row][col] == 4:  # Path
                pygame.draw.rect(screen, blue, (col * cell_size, row * cell_size, cell_size, cell_size))

    pygame.display.flip()

# Dijkstra's algorithm
def dijkstra(start, end):
    distances = [[float('inf')] * grid_size for _ in range(grid_size)]
    distances[start[0]][start[1]] = 0

    priority_queue = [(0, start)]  # (distance, (row, col))
    visited = set()
    parent = {}

    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # Right, Down, Left, Up

    while priority_queue:
        current_dist, (current_row, current_col) = heapq.heappop(priority_queue)

        if (current_row, current_col) in visited:
            continue

        visited.add((current_row, current_col))

        if (current_row, current_col) == end:
            path = []
            while (current_row, current_col) in parent:
                path.append((current_row, current_col))
                current_row, current_col = parent[(current_row, current_col)]
            for r, c in path:
                if (r, c) != start and (r, c) != end:
                    grid[r][c] = 4
                    draw_grid()
            return

        for dr, dc in directions:
            neighbor_row = current_row + dr
            neighbor_col = current_col + dc

            if 0 <= neighbor_row < grid_size and 0 <= neighbor_col < grid_size and grid[neighbor_row][neighbor_col] != 1:
                new_dist = current_dist + 1
                if new_dist < distances[neighbor_row][neighbor_col]:
                    distances[neighbor_row][neighbor_col] = new_dist
                    parent[(neighbor_row, neighbor_col)] = (current_row, current_col)
                    heapq.heappush(priority_queue, (new_dist, (neighbor_row, neighbor_col)))

# Main loop
running = True
while running:
    draw_grid()
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if pygame.mouse.get_pressed()[0]:  # Left mouse button
            x, y = pygame.mouse.get_pos()
            row, col = y // cell_size, x // cell_size
            if not start:
                start = (row, col)
                grid[row][col] = 2
            elif not end and (row, col) != start:
                end = (row, col)
                grid[row][col] = 3
            elif (row, col) != start and (row, col) != end:
                grid[row][col] = 1
                dragging_block = True

        elif pygame.mouse.get_pressed()[2]:  # Right mouse button
            x, y = pygame.mouse.get_pos()
            row, col = y // cell_size, x // cell_size
            if grid[row][col] == 1:
                grid[row][col] = 0

        if event.type == pygame.MOUSEBUTTONUP:
            dragging_block = False

        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE and start and end:
                dijkstra(start, end)

pygame.quit()
sys.exit()
