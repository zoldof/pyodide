# 測定関数（共通部分）
def measure_all(func, *args):
    tracemalloc.start()
    start_time = time.perf_counter()

    # *args を渡して関数を実行
    result = func(*args)  # 引数に渡される内容に応じて適切な関数を呼び出す

    end_time = time.perf_counter()
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    elapsed_time = end_time - start_time
    result_data = {
        "実行時間": elapsed_time,
        "メモリ（現在）": current,
        "メモリ（ピーク）": peak,
    }

    if isinstance(result, tuple) and len(result) == 3:
        # 並べ替えのアルゴリズムの場合
        compare, swap, sorted_arr = result
        result_data.update({
            "比較回数": compare,
            "交換回数": swap,
            "ソート後の配列": sorted_arr[:10],  # 最初の10個だけ表示
        })
    elif isinstance(result, str):
        # 時刻差分のアルゴリズムの場合
        result_data["実行結果"] = result

    return result_data
