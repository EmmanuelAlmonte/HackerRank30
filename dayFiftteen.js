function Solution(){

        //complete this method
	this.insert=function(head,data){
    // Create a new Node with the data argument
        const newNode = new Node(data)
    // Check if the current head is not equal to null
        if(head !== null) {
            // Save the currentTail as the head
            let currentTail = head
            //Traverse through the linked list until you find the tail
            while(currentTail.next != null) {
              // Set currentTail as this nodes next Node
                currentTail = currentTail.next
            }
            // Set the tail's next node to the new Node
            currentTail.next = newNode
          // Return the head of the Linked list
            return head
        }
        // If the current head is null set the new Node as the head and tail
        head = newNode
        // return the linked List's head
        return head
          
    };
