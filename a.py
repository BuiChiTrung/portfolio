def connect(self, root: 'Node') -> 'Node':
        q = Queue()
        q.put((root, 1))
        prev_node = (None, 0)
        # print(q.get()[0])

        while not q.empty():
            top = q.get()
            print(top)
            print(root)
            if prev_node[1] != top[1]:
                top[0].next = None
            else:
                top[0].next = prev_node[0]

            prev_node = top

            if top[0].right != None:
                q.put((top[0].right, top[1] + 1))
            if top[0].left != None:
                q.put((top[0].left, top[1] + 1))
        
        return root