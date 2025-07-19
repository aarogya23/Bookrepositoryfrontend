
        // Sample book data with actual book cover images
        const books = [
            {
                link: "Bookdetailpage.html",
                id: 1,
                title: "Origin",
                author: "Dan Brown",
                genre: "Thriller / Mystery",
                coverUrl: "1.png",
                keywords: ["origin", "dan brown", "thriller", "mystery", "robert langdon"]
            },
            {
                id: 2,
                title: "The Fury",
                author: "Alex Michaelides",
                genre: "Psychological Thriller",
                coverUrl: "2.png",
                keywords: ["fury", "alex michaelides", "psychological", "thriller"]
            },
            {
                id: 3,
                title: "The Madness",
                author: "Alex Michaelides",
                genre: "Psychological Thriller",
                coverUrl: "3.png",
                keywords: ["madness", "alex michaelides", "psychological", "thriller"]
            },
            {
                id: 4,
                title: "Gerald's Game",
                author: "Stephen King",
                genre: "Horror Genre",
                coverUrl: "4.png",
                keywords: ["gerald", "game", "stephen king", "horror"]
            },
            {
                id: 5,
                title: "Don't Turn Around",
                author: "Jo Spain",
                genre: "Thriller / Suspense",
                coverUrl: "5.png",
                keywords: ["don't", "turn", "around", "jo spain", "thriller", "suspense"]
            },
            {
                id: 6,
                title: "The Silent Patient",
                author: "Alex Michaelides",
                genre: "Psychological Thriller",
                coverUrl: "6.png",
                keywords: ["silent", "patient", "alex michaelides", "psychological", "thriller"]
            }
        ];

        let currentSearchResults = books;

        function showHomePage() {
            document.getElementById('searchPage').classList.remove('active');
            document.getElementById('homeContent').classList.remove('hidden');
            loadPopularBooks();
        }

        function showSearchPage() {
            document.getElementById('homeContent').classList.add('hidden');
            document.getElementById('searchPage').classList.add('active');
            performSearch('');
        }

        function loadPopularBooks() {
            const grid = document.getElementById('popularBooksGrid');
            grid.innerHTML = '';
            
            books.forEach(book => {
                const bookCard = createBookCard(book);
                grid.appendChild(bookCard);
            });
        }

        function createBookCard(book) {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.onclick = () => openBookDetails(book.title);
            
            card.innerHTML = `
            <a href="${book.link}" style="text-decoration: none;">
                <div class="book-card-cover">
                    <img src="${book.coverUrl}" alt="Cover of ${book.title}" onerror="this.src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=280&fit=crop&crop=center'" />
                </div>
                <div class="book-card-title">${book.title}</div>
                <div class="book-card-author">${book.author}</div>
                <div class="book-card-genre">${book.genre}</div>
            </a>
            `;
            
            return card;
        }

        function performSearch(searchTerm) {
            const grid = document.getElementById('booksGrid');
            const noResults = document.getElementById('noResults');
            const pagination = document.getElementById('pagination');
            const resultsCount = document.getElementById('resultsCount');
            
            if (!searchTerm.trim()) {
                currentSearchResults = books;
            } else {
                currentSearchResults = books.filter(book => {
                    const searchLower = searchTerm.toLowerCase();
                    return book.keywords.some(keyword => 
                        keyword.toLowerCase().includes(searchLower)
                    ) || 
                    book.title.toLowerCase().includes(searchLower) ||
                    book.author.toLowerCase().includes(searchLower) ||
                    book.genre.toLowerCase().includes(searchLower);
                });
            }
            
       
            // Clear grid
            grid.innerHTML = '';
            
            if (currentSearchResults.length === 0) {
                // Show no results message
                noResults.style.display = 'block';
                pagination.style.display = 'none';
                resultsCount.textContent = 'No books found';
            } else {
                // Show results
                noResults.style.display = 'none';
                pagination.style.display = 'flex';
                
                currentSearchResults.forEach(book => {
                    const bookCard = createBookCard(book);
                    grid.appendChild(bookCard);
                });
                
                // Update results count
                const count = currentSearchResults.length;
                resultsCount.textContent = `Found ${count} book${count !== 1 ? 's' : ''}`;
            }
        }

        function clearSearch() {
            document.getElementById('searchInput').value = '';
            performSearch('');
        }

        function showNotifications() {
            alert('You have 3 new notifications:\n• Book "The Alchemist" is now available\n• Your reservation for "1984" expires tomorrow\n• New books added to Sci-Fi section');
        }

        function reserveBook() {
            if (confirm('Reserve "Origin" by Dan Brown?\n\nThis book will be held for you for 3 days.')) {
                alert('Book reserved successfully!\n\nReservation ID: #12345\nPickup by: July 19, 2025\nLocation: Main Library, Floor 2');
                
                const button = document.querySelector('.reserve-button');
                button.textContent = '✓ Reserved';
                button.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
                button.disabled = true;
            }
        }

        function openBookDetails(bookTitle) {
            alert(`Opening details for: ${bookTitle}`);
        }

        function previousPage() {
            alert('Previous page');
        }

        function nextPage() {
            alert('Next page');
        }

        function goToPage(page) {
            document.querySelectorAll('.pagination-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            alert(`Going to page ${page}`);
        }

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', function() {
            const searchTerm = this.value;
            performSearch(searchTerm);
        });

        // Filter functionality
        document.getElementById('filterSelect').addEventListener('change', function() {
            const filterValue = this.value;
            // Apply filter to current search results
            console.log('Filtering by:', filterValue);
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            loadPopularBooks();
        });
   
  function toggleMobileMenu() {
    const dropdown = document.getElementById("mobileDropdown");
    dropdown.classList.toggle("hidden");
  }

  function toggleUserMenu() {
    const dropdown = document.getElementById("mobileDropdown");
    dropdown.classList.toggle("hidden");
  }



  function showProfile() {
  window.location.href = "profilepage.html"; // Replace with your actual profile page path
}


  function showPayment() {
    alert("Payment Page");
  }

  function logout() {
    alert("Logging out...");
  }

