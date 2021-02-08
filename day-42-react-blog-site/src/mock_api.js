const api = [
    {
        "id": 0,
        "title": "First Article",
        "content": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor tortor augue, in fermentum lorem finibus eget. Pellentesque elementum velit et aliquet tempus. Vivamus scelerisque quis est eget pharetra. Nunc vestibulum, nisi quis pellentesque ornare, dolor tellus ultrices odio, non molestie velit ipsum ut erat. Vestibulum condimentum quam semper magna maximus, ut dapibus massa volutpat. Mauris sed velit felis. Etiam imperdiet scelerisque mattis. Aenean congue in dolor non convallis. Donec in placerat libero, ut blandit libero. Nunc sapien risus, rutrum vitae tortor non, aliquet lobortis felis. Aliquam ut rhoncus neque, vitae porttitor eros.

        Donec consectetur tincidunt dui sed luctus. Quisque pretium fringilla euismod. Nunc ultricies dui nunc, in egestas metus lobortis sed. Suspendisse ac facilisis dui, vulputate pharetra velit. Pellentesque et dapibus turpis. Nullam volutpat ultricies sapien, et aliquam mauris facilisis rutrum. In in felis eget leo imperdiet gravida. Mauris vestibulum nisl ex, a auctor lorem maximus eu. Pellentesque malesuada imperdiet turpis a rutrum. Morbi scelerisque tempor risus, commodo tempus purus mollis tempus. Nulla et nulla eu est rhoncus vestibulum eu in leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    },
    {
        "id": 1,
        "title": "Second Article",
        "content": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor tortor augue, in fermentum lorem finibus eget. Pellentesque elementum velit et aliquet tempus. Vivamus scelerisque quis est eget pharetra. Nunc vestibulum, nisi quis pellentesque ornare, dolor tellus ultrices odio, non molestie velit ipsum ut erat. Vestibulum condimentum quam semper magna maximus, ut dapibus massa volutpat. Mauris sed velit felis. Etiam imperdiet scelerisque mattis. Aenean congue in dolor non convallis. Donec in placerat libero, ut blandit libero. Nunc sapien risus, rutrum vitae tortor non, aliquet lobortis felis. Aliquam ut rhoncus neque, vitae porttitor eros.

        Donec consectetur tincidunt dui sed luctus. Quisque pretium fringilla euismod. Nunc ultricies dui nunc, in egestas metus lobortis sed. Suspendisse ac facilisis dui, vulputate pharetra velit. Pellentesque et dapibus turpis. Nullam volutpat ultricies sapien, et aliquam mauris facilisis rutrum. In in felis eget leo imperdiet gravida. Mauris vestibulum nisl ex, a auctor lorem maximus eu. Pellentesque malesuada imperdiet turpis a rutrum. Morbi scelerisque tempor risus, commodo tempus purus mollis tempus. Nulla et nulla eu est rhoncus vestibulum eu in leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    },
    {
        "id": 2,
        "title": "Third Article",
        "content": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor tortor augue, in fermentum lorem finibus eget. Pellentesque elementum velit et aliquet tempus. Vivamus scelerisque quis est eget pharetra. Nunc vestibulum, nisi quis pellentesque ornare, dolor tellus ultrices odio, non molestie velit ipsum ut erat. Vestibulum condimentum quam semper magna maximus, ut dapibus massa volutpat. Mauris sed velit felis. Etiam imperdiet scelerisque mattis. Aenean congue in dolor non convallis. Donec in placerat libero, ut blandit libero. Nunc sapien risus, rutrum vitae tortor non, aliquet lobortis felis. Aliquam ut rhoncus neque, vitae porttitor eros.

        Donec consectetur tincidunt dui sed luctus. Quisque pretium fringilla euismod. Nunc ultricies dui nunc, in egestas metus lobortis sed. Suspendisse ac facilisis dui, vulputate pharetra velit. Pellentesque et dapibus turpis. Nullam volutpat ultricies sapien, et aliquam mauris facilisis rutrum. In in felis eget leo imperdiet gravida. Mauris vestibulum nisl ex, a auctor lorem maximus eu. Pellentesque malesuada imperdiet turpis a rutrum. Morbi scelerisque tempor risus, commodo tempus purus mollis tempus. Nulla et nulla eu est rhoncus vestibulum eu in leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    },
    {
        "id": 3,
        "title": "Fourth Article",
        "content": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor tortor augue, in fermentum lorem finibus eget. Pellentesque elementum velit et aliquet tempus. Vivamus scelerisque quis est eget pharetra. Nunc vestibulum, nisi quis pellentesque ornare, dolor tellus ultrices odio, non molestie velit ipsum ut erat. Vestibulum condimentum quam semper magna maximus, ut dapibus massa volutpat. Mauris sed velit felis. Etiam imperdiet scelerisque mattis. Aenean congue in dolor non convallis. Donec in placerat libero, ut blandit libero. Nunc sapien risus, rutrum vitae tortor non, aliquet lobortis felis. Aliquam ut rhoncus neque, vitae porttitor eros.

        Donec consectetur tincidunt dui sed luctus. Quisque pretium fringilla euismod. Nunc ultricies dui nunc, in egestas metus lobortis sed. Suspendisse ac facilisis dui, vulputate pharetra velit. Pellentesque et dapibus turpis. Nullam volutpat ultricies sapien, et aliquam mauris facilisis rutrum. In in felis eget leo imperdiet gravida. Mauris vestibulum nisl ex, a auctor lorem maximus eu. Pellentesque malesuada imperdiet turpis a rutrum. Morbi scelerisque tempor risus, commodo tempus purus mollis tempus. Nulla et nulla eu est rhoncus vestibulum eu in leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    },
    {
        "id": 4,
        "title": "Fifth Article",
        "content": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor tortor augue, in fermentum lorem finibus eget. Pellentesque elementum velit et aliquet tempus. Vivamus scelerisque quis est eget pharetra. Nunc vestibulum, nisi quis pellentesque ornare, dolor tellus ultrices odio, non molestie velit ipsum ut erat. Vestibulum condimentum quam semper magna maximus, ut dapibus massa volutpat. Mauris sed velit felis. Etiam imperdiet scelerisque mattis. Aenean congue in dolor non convallis. Donec in placerat libero, ut blandit libero. Nunc sapien risus, rutrum vitae tortor non, aliquet lobortis felis. Aliquam ut rhoncus neque, vitae porttitor eros.

        Donec consectetur tincidunt dui sed luctus. Quisque pretium fringilla euismod. Nunc ultricies dui nunc, in egestas metus lobortis sed. Suspendisse ac facilisis dui, vulputate pharetra velit. Pellentesque et dapibus turpis. Nullam volutpat ultricies sapien, et aliquam mauris facilisis rutrum. In in felis eget leo imperdiet gravida. Mauris vestibulum nisl ex, a auctor lorem maximus eu. Pellentesque malesuada imperdiet turpis a rutrum. Morbi scelerisque tempor risus, commodo tempus purus mollis tempus. Nulla et nulla eu est rhoncus vestibulum eu in leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    }
]

export default api;