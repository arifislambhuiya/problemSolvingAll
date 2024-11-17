#include <bits/stdc++.h>
using namespace std;


struct Node{
    int data;
    Node* next;


    Node(int data){
        this->data = data;
        this->next = nullptr;
    }
};

void printList(Node* head){
    while (head != nullptr)
    {
        cout << " " <<head->data;
        head = head->next;
    }
    cout << endl;
}


int main(){
    Node* head = new Node(3);
    head->next = new Node(5);
    head->next->next = new Node(8);
    head->next->next->next = new Node(10);

    printList(head);
    return 0;
}