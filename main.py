def main(*args){

    tests = []
    
    '''
    この記号で囲うとコメントアウトできます
    '''

    '''
    # ▼ 他のアルゴリズム
    for name, func in [
        ("Bubble Sort", bubble_sort),
        ("Selection Sort", selection_sort),
        ("Bucket Sort", bucket_sort),
        ("Counting Sort", counting_sort),
        ("Radix Sort", radix_sort),
    ]:
        tests.append((name, func, [data]))
    '''

    # ▼ 時刻差分の測定（不要なときはこのブロックをコメントアウト）
    tests.append(("時刻差分", time_elapsed, [start, end]))
    # ↑ ここまでをコメントアウトすると、時刻差分のテストをスキップできます

    # ▼ 共通の実行部分
    for name, func, args in tests:
        print_result(name, measure_all(func, *args))
}
