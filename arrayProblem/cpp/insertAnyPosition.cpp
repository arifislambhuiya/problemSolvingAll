#include <bits/stdc++.h>
using namespace std;


void insertAnyPosition(int arr[] ,int n, int x, int pos){
    for(int i = n - 1; i >= pos; i--){
        arr[i + 1] = arr[i];
    }
    arr[pos] = x;
}


int main(){

int arr[10] = {2,3,5,6,49,22};
 int n = 6;

 cout << "Before insertion ";
 for(int i = 0; i< n; i++){
    cout<< arr[i] << " ";
 }

 int x = 20;

 int pos = 3;

insertAnyPosition(arr,n,x,pos);

cout << "After insertion ";
 for(int i = 0; i< n; i++){
    cout<< arr[i] << " ";
 }

    

    return 0;
}